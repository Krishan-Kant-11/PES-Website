const { Router } = require('express');
const authMiddleware = require('../middlewares/auth');
const Event = require('../models/EventModel');
const router = Router();

router.get('/list', async (req, res) => {
  let type = req.query.type; // competitions, outreach, celebrations, other
  // console.log("list request : ", req.query.type);
  let events = [];
  if (type) events = await Event.find({ type }).sort({date: -1}); 
  else events = await Event.find({}).sort({date: -1});
  res.status(200).json(events);
});

router.get('/delete', authMiddleware(true), async (req, res) => {
  let id = req.query.id;
  if(id == undefined) {
    res.sendStatus(404);
  }
  const event = await Event.findByIdAndDelete(id);
  res.status(200).json(event);
});

router.post('/update', authMiddleware(true), async (req, res) => {
  let id = req.body.id;
  let title = req.body.title;
  let description = req.body.description;
  let date = req.body.date;
  let images = req.files;
  let type = req.body.type || 'others';
  for(let i=0; i<images.length; i++){
    images[i] = "data:image/jpeg;base64, "+req.files[i].buffer.toString('base64');
  }
  if(id == undefined) {
    res.sendStatus(404);
  }
  const event = await Event.findByIdAndUpdate(id, {
    title: title,
    description: description,
    date: date,
    images: images,
    type: type
  });
  res.status(200).json(event);
});

router.post('/create', authMiddleware(true), async (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  let date = req.body.date;
  let images = req.files;
  let type = req.body.type || 'others';
  for(let i=0; i<images.length; i++){
    images[i] = "data:image/jpeg;base64, "+req.files[i].buffer.toString('base64');
  }
  const event = await Event.create({
    title: title,
    description: description,
    date: date,
    images: images,
    type: type
  });
  res.status(200).json(event);
});

router.get('/details', async(req, res) => {
  const { eventid } = req.query;
  if(!eventid) {
    res.status(404).json({});
  }else{
    const event = await Event.findById(eventid);
    if (!event) return res.status(404).json({});
    return res.status(200).json({ event });

    // res.status(200).json({
    //   id: 1,
    //   title: 'Event Title',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec tellus non lectus vestibulum lacinia bibendum eget eros. Proin leo metus, efficitur et gravida ac, placerat et metus. Fusce varius est eros. Curabitur imperdiet odio justo, efficitur egestas quam cursus eu. Vivamus mollis sem ac porta commodo. Nunc aliquam risus.',
    //   date: '14 December, 2023',
    //   images: ['/src/assets/hero_image1.jpg', '/src/assets/hero_image2.jpg', '/src/assets/hero_image4.jpg'],
    // });
  }
});

module.exports = router;