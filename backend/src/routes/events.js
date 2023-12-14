const { Router } = require('express');
const authMiddleware = require('../middlewares/auth');
const router = Router();

router.get('/', (req, res) => {
  res.send('Events API works!');
});

router.get('/list', (req, res) => {
  res.send('Events list works!');
});

router.get('/details', (req, res) => {
  res.send('Events details works!');
});

router.get('/create', authMiddleware, (req, res) => {
  res.send('Events create works!');
});

router.get('/update', authMiddleware, (req, res) => {
  res.send('Events update works!');
});

router.get('/delete', authMiddleware, (req, res) => {
  res.send('Events delete works!');
});

module.exports = router;