const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

//connectDB 
const connectDB = require('./src/db/connectDB.js');

const app = express();

//express middlewares 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//database connection 
connectDB();

//port 
const port = process.env.PORT;

const logger = require('./src/middlewares/logger.js');

const events_routes = require('./src/routes/events.js');
const auth_routes = require('./src/routes/auth.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/events', events_routes);
app.use('/auth', auth_routes);

app.listen(port, () => {
  console.log(`PES Backend listening at http://localhost:${port}`);
});