const salida = require('./salida.json').data;

exports.numeroTotal = () => {
    return salida.length;
}

exports.followers = () => {
    return getFollowers();
}

exports.mediaFollowers = () => {
    return Math.trunc(getFollowers() / salida.length);
}

exports.influyentes = () => {

    let vector = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let imgs = ["", "", "", "", "", "", "", "", "", ""];
    let names = ["", "", "", "", "", "", "", "", "", ""];
    let min;

    for (let i = 0; i < salida.length; i++) {
        min = Math.min(...vector);
        if (salida[i].Retweets > min) {
            let pos = getPos(vector, min);
            vector[pos] = salida[i].Retweets;
            imgs[pos] = salida[i].ProfileImagen;
            names[pos] = salida[i].ScreenName;
        }
    }
    let vectorVectores = [names, imgs];
    return vectorVectores;
}

exports.ultimosTweets = () => {

    let imgs = ["", "", "", "", "", "", "", "", "", ""];
    let names = ["", "", "", "", "", "", "", "", "", ""];
    let pos = 0;

    for (let i = 0; i < salida.length; i++) {
        if (i >= (salida.length - 11)) {
            imgs[pos] = salida[i].ProfileImagen;
            names[pos] = salida[i].ScreenName;
            pos++;
        }
    }
    let vectorVectores = [names, imgs];
    return vectorVectores;
}

function getFollowers() {
    let contador = 0;
    for (let i = 0; i < salida.length; i++) {
        contador += salida[i].Followers;
    }
    return contador;
}

function getPos(vector, x) {
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] == x) {
            return i;
        }
    }
}

function include(arr, obj) {
    return (arr.indexOf(obj) != -1);
}

function isInDevices(dev, devs) {
    for (let i = 0; i < devs.length; i++) {
        if (dev == devs[i]) return true;
    }
    return false;
}

function getDevices() {
    let devices = [];
    let device;
    for (let i = 0; i < salida.length; i++) {
        device = salida[i].App
        if (!isInDevices(device, devices)) devices.push(device);
    }
}

exports.countDevices = () => {

    let devices = ["Windows", "iOS", "Android", "Instagram", "Facebook", "TweetDeck", "Otros"];
    let cnt = [0, 0, 0, 0, 0, 0, 0];

    for (let i = 0; i < salida.length; i++) {
        if ((salida[i].App == "twitter for windows phone") || (salida[i].App == "twitter for windows")) cnt[0]++;
        else if ((salida[i].App == "twitter for ipad") || (salida[i].App == "twitter for iphone") || (salida[i].App == "twitter for mac")) cnt[1]++;
        else if (salida[i].App == "twitter for android") cnt[2]++;
        else if (salida[i].App == "instagram") cnt[3]++;
        else if (salida[i].App == "facebook") cnt[4]++;
        else if (salida[i].App == "tweetdeck") cnt[5]++;
        else cnt[6]++;
    }

    let devicescounter = [devices, cnt]
    return devicescounter;
}
