const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const cookieParser = require('cookie-parser');

//connectDB 
const connectDB = require('./src/db/connectDB.js');

const app = express();

//express middlewares 
const logger = require('./src/middlewares/logger.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any());
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:5173'})); // TODO: update when deploying
app.use(logger);

//port 
const port = process.env.PORT;


const events_routes = require('./src/routes/events.js');
const auth_routes = require('./src/routes/auth.js');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/events', events_routes);
app.use('/auth', auth_routes);


//database connection 
connectDB().then(()=>{
  app.listen(port, () => {
    console.log(`PES Backend listening at http://localhost:${port}`);
  });
}).catch((err)=>{
  console.log(err);
  console.error("Couldn't start server because of database connection failure.")
});