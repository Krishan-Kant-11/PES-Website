const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const port = process.env.PORT;

const cors = require('cors');
const logger = require('./src/middlewares/logger.js');
app.use(cors());
app.use(logger);

const events_routes = require('./src/routes/events.js');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/events', events_routes);

app.listen(port, () => {
  console.log(`PES Backend listening at http://localhost:${port}`);
});