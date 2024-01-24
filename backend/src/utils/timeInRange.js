const { ATTENDANCE_START_TIME, ATTENDANCE_END_TIME } = require('../../constants.js');

const timeConverter = (hour, minute, second) => {
    const h = Number(hour), m = Number(minute), s = Number(second);
    return h*3600000 + m*60000 + s*1000;
} 

const timeInRange = (attDate) => {
    const startTimeArr = ATTENDANCE_START_TIME.split(':');
    const endTimeArr = ATTENDANCE_END_TIME.split(':');

    const startTime = timeConverter(startTimeArr[0], startTimeArr[1], startTimeArr[2]);
    const endTime = timeConverter(endTimeArr[0], endTimeArr[1], endTimeArr[2]);
    const attTime = timeConverter(attDate.getHours(), attDate.getMinutes(), attDate.getSeconds());
    
    if (startTime <= endTime) return attTime >= startTime && attTime <= endTime;
    else return attTime >= startTime || attTime <= endTime;
}

module.exports = {
    timeInRange
};