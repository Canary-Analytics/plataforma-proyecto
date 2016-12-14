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

function getFollowers () {
  let contador = 0;
  for (let i = 0; i < salida.length; i++) {
    contador += salida[i].Followers;
  }
  return contador;
}
