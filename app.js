'use strict';

async function main() {
  let response = await fetch("https://dog.ceo/api/breeds/image/random")
  console.log(response)
  let perritos = await response.json()
  console.log(perritos)

  const main = document.querySelector('main')
  main.innerHTML = `<img src='${perritos.message}'>`

};
window.addEventListener('load', main);

/*Info para Alex: 3 variables: 
con response cojo la info de la API.
con perritos la transformo (json) para manipular la info
Pongo const main pq voy al html y busco donde quiero meter el perro
con el querySelector selecciono la imagen
Con innerHTML pongo la imagen del perrito en la web
Pongo perrito.message pq lo veo en la consola de Chrome
*/


async function getDog() {
let dogPic = await response.json();
}

async function initDogApi() {


};
getDog()



async function getRates() {
  let response = await fetch ("https://api.exchangeratesapi.io/latest")
  console.log(response)
  let divisas = await response.json()
  console.log(perritos);

}


let divisesDisplay = async () => {
  const response = await fetch ("https://api.exchangeratesapi.io/latest")
  const jason = await response.json();
  //console.log(jason);
  const select = document.CreateElement('select');
  //console.log(select);

  for (const key in divises) {
    let option = document.createDocument('option');
    option.innerHTML = `${key}: ${divises[key]}`; 
    select.appendChild (option);
  }
}
document.getElementById("main").appendChild(select)