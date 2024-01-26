const { Router } = require('express');
const authMiddleware = require('../middlewares/auth');
const router = Router();
const {getEvents, 
      getEvent, 
      createEvent, 
      deleteEvent, 
      updateEvent
    } = require('../controllers/eventController');

// Get all Events
 //  router.get('/', getEvents);

// Get single Event
   //router.get('/:id', getEvent);

// Create Event
   //router.post('/', createEvent);

// Delete Event
   //router.delete('/:id', deleteEvent);

// Update Event
//   router.patch('/:id', updateEvent);

router.get('/list', (req, res) => {
  let events = [];
  let type = req.params.type; // competitions, outreach, celebrations, other
  for(let i=0; i<10; i++) {
    events.push({
      id: i,
      title: 'Event Title',
      date: '14 December, 2023',
      image: `/src/assets/hero_image${i%4+1}.jpg`,
    })
  }
  res.status(200).json(events);
});

router.get('/details', (req, res) => {
  if(req.query.eventid == undefined) {
    res.status(404).json({});
  }else{
    res.status(200).json({
      id: 1,
      title: 'Event Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec tellus non lectus vestibulum lacinia bibendum eget eros. Proin leo metus, efficitur et gravida ac, placerat et metus. Fusce varius est eros. Curabitur imperdiet odio justo, efficitur egestas quam cursus eu. Vivamus mollis sem ac porta commodo. Nunc aliquam risus.',
      date: '14 December, 2023',
      images: ['/src/assets/hero_image1.jpg', '/src/assets/hero_image2.jpg', '/src/assets/hero_image4.jpg'],
    });
  }
});

router.get('/create', authMiddleware(true), (req, res) => {
  res.send('Events create works!');
});

router.get('/update', authMiddleware(true), (req, res) => {
  res.send('Events update works!');
});

router.get('/delete', authMiddleware(true), (req, res) => {
  res.send('Events delete works!');
});

// Post a new event
router.post('/', createEvent);

module.exports = router;
