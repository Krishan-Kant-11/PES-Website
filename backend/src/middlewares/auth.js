const user = require('../models/user');

module.exports = (admin) => {
  return async (req, res, next) => {
    // console.log(req.cookies.token)
    // console.log('Auth middleware');
    const token = req.headers.authorization || req.cookies.token; // get token from request headers/cookies
    const _user = await user.getUser(token);
    // console.log(_user);
    if (!_user) {
      return res.status(401).send('Unauthorized');
    }
    req.user = _user;
    if (admin && _user.privileges !== 'admin') {
      return res.status(401).send('Unauthorized');
    }
    next();
  };
}