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
  if(req.query.eventid == undefined) {
    res.status(404).json({});
  }else{
    res.status(200).json({
      id: 1,
      name: 'Event Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec tellus non lectus vestibulum lacinia bibendum eget eros. Proin leo metus, efficitur et gravida ac, placerat et metus. Fusce varius est eros. Curabitur imperdiet odio justo, efficitur egestas quam cursus eu. Vivamus mollis sem ac porta commodo. Nunc aliquam risus.',
      date: '14 December, 2023',
      images: Array(5).fill("https://placehold.co/500x250/FF6600/993300?text=PES+Event"),
    });
  }
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