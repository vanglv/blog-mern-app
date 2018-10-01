const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const compression = require('compression');

// Import required modules
const posts = require('./routes/post.routes');
const serverConfig = require('./config');

const app = express();

mongoose.promise = global.Promise;

// MongoDB Connection
mongoose
  .connect(serverConfig.mongoURL)
  .then(() => console.log('Connect to MongoDB server sucessfull!'))
  .catch(err => console.error(err));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

// Use Routes
app.use('/api/posts', posts);

app.listen(serverConfig.port, (error) => {
  if(!error) {
    console.log(`Server is running on port: ${serverConfig.port}`);
  }
});
