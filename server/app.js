var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');

const topicRouter = require('./src/routes/topic');
const userRouter = require('./src/routes/user');
const voteRouter = require('./src/routes/vote');
const { createSchemas } = require('./src/utils/Mongoose');

var app = express();

//socket.io
const server = require('http').createServer(app);

/*const io = require('socket.io')(server);
io.on('connection', socket => {
  console.log(socket);
});*/

mongoose.connect('mongodb://localhost:27017/debate', {
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
