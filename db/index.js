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
    let vectorVectores = [names,imgs];
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

function include(arr,obj) {
  return (arr.indexOf(obj) != -1);
}

function getDevices() {
    let devices = [];
    for (let i = 0; i < salida.length; i++) {
      if(!devices.find())
      {
        devices.push(salida[i].App);
      }
  }
  console.log(devices);
}

getDevices();
