"use strict";

const express = require('express');
const app = express();
const path = require('path');
const db = require('./db/index');

const total = db.numeroTotal();
const follows = db.followers();
const mFollows= db.mediaFollowers();
const inf = db.influyentes();
const ultimosTweets = db.ultimosTweets();
const countDevices = db.countDevices();
const infoTweets = db.getTweetInfo();

app.set('port', (process.env.PORT || 8080));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.render('index');
});

app.get('/buscar', (request, response) => {
    response.json(countDevices);
});

app.get('/datos', (request, response) => {
    response.render('datos', {
        nTweets: total,
        nFollowers: follows,
        media: mFollows,
        nombre: inf[0],
        url: inf[1],
        nombre2: ultimosTweets[0],
        url2: ultimosTweets[1]
    });
});

app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}`);
});
