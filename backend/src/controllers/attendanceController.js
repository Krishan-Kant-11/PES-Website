const exceljs = require('exceljs');

//models 
const User = require('../models/user.js');

//constants 
const { LATITUDE, LONGITUDE, DISTANCE_ALLOWED, ATTENDANCE_START_TIME, ATTENDANCE_END_TIME } = require('../../constants.js');

//utils 
const calculateDistance = require('../utils/calculateDistance.js');
const { timeInRange } = require('../utils/timeInRange.js');
const { getMonthWorksheetColumn, getDateStringLE, getDateStringBE, daysInMonth } = require('../utils/getMonthWorksheetColumn.js');

// @desc    Get Attendance
// route    POST /attendance/getAtt
// @access  Private (Admin) 
const getAttendance = async(req, res, next) => {
    const { month, year } = req.body;
    try {
        const workbook = new exceljs.Workbook();
        const worksheet = workbook.addWorksheet('sheet');
        
        worksheet.columns = getMonthWorksheetColumn(month, year);

        const users = await User.find({});
        const data = [];

        const days = daysInMonth(month, year);
        
        let attendanceArray = [];
        for (let i=0; i<days; i++) {
            attendanceArray.push(0);
        }

        for (const user of users) {
            const userObject = { name: user.name };
            
            for (let i=0; i<user.attendance.length; i++) {
                const { date, present } = user.attendance[i];
                if (date.getMonth() == month) {
                    if (present) {
                        const day = date.getDate()-1;
                        attendanceArray[day] = 1;
                    }
                }
            }
            
            let totalAttendanceCount = 0;
            for (let i=0; i<days; i++) {
                const monthDate = getDateStringLE(i, month, year);
                if (attendanceArray[i]) {
                    userObject[monthDate] = 'P';
                    totalAttendanceCount += 1;
                    attendanceArray[i] = 0;
                }    
                else userObject[monthDate] = '-';
            }

            userObject['total'] = totalAttendanceCount.toString();
            
            data.push(userObject);
        }

        worksheet.addRows(data);

        // response headers for sending Excel file
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', `attachment; filename=${month+1}_${year}_attendence.xlsx`);

        workbook.xlsx.write(res)
        .then(() => {
            res.end();
        })
        .catch((err) => {
            console.error(err);
            return res.status(500).send('Error generating Excel file');
        }); 
    } catch (err) {
        console.log("ERROR: ", err.message);
        return res.status(500).json({ ok: 'FAILED', message: 'SERVER ERROR' });
    }
};

// @desc    Mark Attendance
// route    POST /attendance/markAtt
// @access  Private (Admin/Volunteer) 
const markAttendance = async(req, res, next) => {
    const { email } = req.user;
    const { lat, lon, time } = req.body;
    
    try {
        //time check
        const attendanceDate = new Date(JSON.parse(time));

        const user = await User.findOne({ email });

        //user does not exist yet 
        if (!user) {
            return res.status(404).json({ ok: false, message: 'User is not registered.' });
        }
        
        //attendance already taken
        let attendanceAlreadyMarked = false;
        const todayDay = attendanceDate.getDate(), todayMonth = attendanceDate.getMonth(), todayYear = attendanceDate.getFullYear();

        for (let i=0; i<user.attendance.length; i++) {
            const userAttDate = user.attendance[i].date;

            const attDay = userAttDate.getDate(), attMonth = userAttDate.getMonth(), attYear = userAttDate.getFullYear();
            
            if (attDay === todayDay && attMonth === todayMonth && attYear === todayYear) {
                attendanceAlreadyMarked = true;
                break;
            }
        }
        
        if (attendanceAlreadyMarked) {
            return res.status(409).json({ ok: false, message: 'Attendance is already marked.' });
        }

        const timeLimitCheck = timeInRange(attendanceDate);
        
        if (!timeLimitCheck) {
            return res.status(400).json({ ok: false, message: `Attendance can only be marked between ${ATTENDANCE_START_TIME} and ${ATTENDANCE_END_TIME}.` });
        }

        //location check 
        const distance = calculateDistance(lat, lon, LATITUDE, LONGITUDE);
        const distanceLimitCheck = distance <= DISTANCE_ALLOWED; 

        // console.log('distance : ', distance); 
        if (!distanceLimitCheck) {
            return res.status(400).json({ ok: false, message: 'Attendance location is too far from the KV IIT Ropar.' });
        } 

        user.attendance.push({
            date: attendanceDate,
            present: true
        })
        await user.save();
        
        return res.status(200).json({ ok: true, message: 'Attendance marked successfully.', user });

    } catch (err) {
        console.log("ERROR: ", err);
        return res.status(500).json({ ok: false, message: `Server Error` });
    }
};

module.exports = { getAttendance, markAttendance };