module.exports = (req, res, next) => {
  next();
  console.log(`[${req.method}] ${req.url} - ${res.statusCode}`);
};