const User = require('../models/user.js');

// @desc    Get User Profile
// route    GET /profile/get
// @access  Private (Admin/Volunteer) 
const getUserProfile = async(req, res, next) => {
    const { email } = req.user;
    try {
        const user = await User.findOne({ email });
        
        //user does not exist 
        if (!user) {
            return res.status(404).json({ ok: false, message: 'User not found.' });
        }

        //CHECK (password is not send with the user)
        //remove password from user object 
        delete user.password;

        return res.status(200).json({ ok: true, message:'Profile fetched successfully', user });

    } catch (err) {
        return res.status(500).json({ ok: false, message: `Server Error` });
    }
};

// @desc    Update User Profile
// route    PUT /profile/update
// @access  Private (Admin/Volunteer) 
const updateUserProfile = async(req, res, next) => {
    try {

        const { email } = req.user;
        
        //initial photo
        let photo = req.user.photo; 

        //update photo if some file is send
        if (req.file) photo = "data:image/jpeg;base64, " + req.file.buffer.toString('base64');
        
        //update the user profile in the database
        const user = await User.findOneAndUpdate({ email }, {
            ...req.body, ...(photo && { photo })
        }, { new: true });


        if (!user) {
            return res.json(404).json({ ok: false, message: 'User does not exist.' });
        } 

        return res.status(200).json({ ok: true, message: "Profile updated successfully", user });
    } catch (err) {
        return res.status(500).json({ ok: false, message: 'SERVER ERROR' });
    }
};

module.exports = { getUserProfile, updateUserProfile } 