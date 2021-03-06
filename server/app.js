const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

//Get config for specific env
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/env_' + env + '.json');

//Config routes for the api
const topicRouter = require('./src/routes/topic');
const userRouter = require('./src/routes/user');
const voteRouter = require('./src/routes/vote');
const { createSchemas } = require('./src/utils/Mongoose');

var app = express();

mongoose.connect(config.mongodb.uri + 'debate', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(mongooseClient => {
  app.locals.mongooseClient  = mongooseClient;
  app.locals.mongooseSchemas = createSchemas(mongooseClient);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/topic', topicRouter);
app.use('/api/user', userRouter);
app.use('/api/vote', voteRouter);

module.exports = app;
