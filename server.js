"use strict";

const express = require('express');
const app = express();
const path = require('path');
const db = require('./db/index');

db.numeroTotal();
db.followers();
console.log(db.mediaFollowers());

app.set('port', (process.env.PORT || 8080));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.render('index');
});

app.get('/buscar', (request, response) => {
    response.json("[2, 1, 3, 4, 5]");
});

app.get('/datos', (request, response) => {
    response.render('datos', {
        nTweets: db.numeroTotal(),
        nFollowers: db.followers(),
        media: db.mediaFollowers()
    });
});

app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}`);
});
