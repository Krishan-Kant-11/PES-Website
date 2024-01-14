const crypto = require('crypto');
const { Router } = require('express');
const pendingRequest = require('../models/pendingRequest');
const user = require('../models/user');
const authMiddleware = require('../middlewares/auth');
const sendMail = require('../lib/sendMail');
const router = Router();

router.get('/', (req, res) => {
  res.send('Auth API works!');
});

router.post('/signup', async (req, res) => {
  // get user data from request body
  // console.log(req.file.buffer.toString('base64'));
  const _user = {
    photo: "data:image/jpeg;base64, "+req.file.buffer.toString('base64'),
    name: req.body.name,
    email: req.body.email,
    branch: req.body.branch,
    team: req.body.team,
    privileges: "volunteer"
  };
  // Create pending request
  await pendingRequest.create(_user);
  // Return user data
  res.sendStatus(200);
});

router.post('/login', async (req, res) => {
  // get user data from request body
  const _user = {
    email: req.body.email,
    password: req.body.password
  };
  // find user in database
  let userFound = await user.findOne({ email: _user.email });
  // if user not found, return error
  if (!userFound) {
    return res.status(404).send('User not found!');
  }
  // if user found, compare passwords
  let passwordMatch = await user.comparePassword(userFound, _user.password);
  // if passwords don't match, return error
  if (!passwordMatch) {
    return res.status(401).send('Password does not match!');
  }
  // if passwords match, return user token
  let token = await user.getToken(userFound);
  // console.log(token);
  res.cookie('token', token, { httpOnly: true });
  res.status(200).send({token: token});
});

router.post('/change_password', authMiddleware(false), async (req, res) => {
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;
  const confirmNewPassword = req.body.confirmNewPassword;
  // if new passwords don't match, return error
  if (newPassword !== confirmNewPassword) {
    return res.status(401).send('Passwords do not match!');
  }
  const _user = req.user;
  // console.log(_user);
  // console.log(oldPassword);
  // console.log(newPassword);
  // compare old password
  let passwordMatch = await user.comparePassword(_user, oldPassword);
  // if passwords don't match, return error
  if (!passwordMatch) {
    return res.status(401).send('Incorrect Password');
  }
  // if passwords match, change password
  _user.password = await user.createHash(newPassword);
  await user.updateOne({ _id: _user._id }, _user);
  res.sendStatus(200);
});

router.get('/pending_requests', authMiddleware(true), async (req, res) => {
  let requests = await pendingRequest.find({});
  res.status(200).send(requests);
});

router.post('/approve_request', authMiddleware(true), async (req, res) => {
  let id = req.body.id;
  // await pendingRequest.findByIdAndDelete(id);
  let userDoc = await pendingRequest.findById(id);
  // console.log(userDoc);
  if(!userDoc){
    res.sendStatus(404);
  }
  let _user = userDoc.toObject();
  _user._id = undefined;
  _user.__v = undefined;
  var password = crypto.randomBytes(8).toString('base64').replace(/\W/g, '');
  _user.password = await user.createHash(password);
  _user.startDate = new Date();
  // console.log(_user);
  // console.log(password)
  await user.create(_user);
  await sendMail(_user.email, "Welcome to Pehchaan Ek Safar", `Welcome to Pehchaan Ek Safar.\n\nYour account has been approved. Your password is ${password}. Please change your password after logging in.\n\nRegards,\nTeam Pehchaan Ek Safar`);
  await pendingRequest.findByIdAndDelete(id);
  res.sendStatus(200);
});

router.post('/reject_request', authMiddleware(true), async (req, res) => {
  let id = req.body.id;
  await pendingRequest.findByIdAndDelete(id);
  res.sendStatus(200);
});

router.post('/promote', authMiddleware(true), async (req, res) => {
  let id = req.body.id;
  let _user = await user.findById(id);
  // console.log(_user);
  if(!_user){
    res.sendStatus(404);
  }
  _user.privileges = "admin";
  await user.updateOne({ _id: _user._id }, _user);
  res.sendStatus(200);
});

router.post('/demote', authMiddleware(true), async (req, res) => {
  let id = req.body.id;
  let _user = await user.findById(id);
  // console.log(_user);
  if(!_user){
    res.sendStatus(404);
  }
  _user.privileges = "volunteer";
  await user.updateOne({ _id: _user._id }, _user);
  res.sendStatus(200);
});

module.exports = router;