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

  let vector = [0,0,0,0,0,0,0,0,0,0];
  let imgs = ["","","","","","","","","",""];
  let names = ["","","","","","","","","",""];
  let min;

  for (let i = 0; i < salida.length; i++) {
      min = Math.min(...vector);
      if(salida[i].Retweets > min) {
        let pos = getPos(vector,min);
        vector[pos] = salida[i].Retweets;
        imgs[pos] = salida[i].ProfileImagen;
        names[pos] = salida[i].ScreenName;
      }
  }
  let vectorVectores = [names,imgs];
  console.log(vectorVectores)
  return vectorVectores;
}

function getFollowers() {
    let contador = 0;
    for (let i = 0; i < salida.length; i++) {
        contador += salida[i].Followers;
    }
    return contador;
}

function getPos(vector,x) {
  for (let i = 0; i < vector.length; i++) {
    if(vector[i] ==  x) {
      return i;
    }
  }
}
