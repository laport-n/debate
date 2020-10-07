var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const topicRouter = require('./routes/topic');
const userRouter = require('./routes/user');
const voteRouter = require('./routes/vote');

var app = express();

//socket.io
const server = require('http').createServer(app);

/*const io = require('socket.io')(server);
io.on('connection', socket => {
  console.log(socket);
});*/

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/topic', topicRouter);
app.use('/api/user', userRouter);
app.use('/api/vote', voteRouter);

module.exports = app;
