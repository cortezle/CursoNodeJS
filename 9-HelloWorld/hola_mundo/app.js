var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var apiRouter = require("./routes/api");
//Lo bueno empieza ahorita gg:v
var app = express();

/**
 * Todos estos son middlewares (se pasan funciones)
 */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);



app.use('/api',apiRouter);


module.exports = app;
