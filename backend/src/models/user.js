const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

//attendance schema 
const attendanceSchema = new mongoose.Schema({
    date: { 
        type: Date, 
        required: true 
    },
    present: { 
        type: Boolean, 
        required: true 
    }
});

//user schema
const userSchema = new mongoose.Schema({
    photo: {
        type: String, 
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    team: {
        type: String,
    },
    // TODO: Update database to replace workDuration with startDate
    workDuration: {
        type: Number,
        required: false
    },
    startDate: {
        type: Date,
        required: true
    },
    certificate: {
        type: String,
        // required: true
    },
    attendance: [attendanceSchema],
    privileges: {
        type: String,
        enum: ["volunteer", "admin"],
        required: true
    },
    token: {
        type: String
    }
});

const model = mongoose.model('User', userSchema);

// encrypting password
model.createHash = async function (password) {
	const salt = await bcrypt.genSalt(10);
	return await bcrypt.hash(password, salt);
};

model.comparePassword = async function (user, password) {
  return await bcrypt.compare(password, user.password);
}

// generating auth token
model.getToken = async function (user) {
	try {
		let token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, {
			expiresIn: "30d",
		});
    user.token = token;
		await user.save();
		return token;
	} catch (err) {
		console.log("Model", err.message);
		res.status(500).json({ message: "Something went wrong while generating token", error: err.message });
	}
};

model.getUser = async function (token) {
  try {
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    let user = await model.findById(decoded.id);
    if (!user) {
      throw new Error("User not found!");
    }
    return user;
  } catch (err) {
    console.log("Model", err.message);
  }
};

module.exports = model;