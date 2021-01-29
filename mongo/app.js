var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var accessorurale=require('./routes/accessorurale');
var popolazionerurale=require('./routes/popolazionerurale');
var morterurale=require('./routes/morte');
var indexRouter = require('./routes/index');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/accesso', accessorurale);
app.use('/popolazione', popolazionerurale);
app.use('/morte', morterurale);

module.exports = app;
