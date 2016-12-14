"use strict";

const express = require('express');
const app = express();
const path = require('path');

app.set('port', (process.env.PORT || 8080));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  response.render('index');
});

app.get('/datos', (request, response) => {
  response.render('datos');
});

app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});
