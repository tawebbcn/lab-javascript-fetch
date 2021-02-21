'use strict';

//Iteration 1 -> Dogs

async function getDog() {
  let response = await fetch("https://dog.ceo/api/breeds/image/random");
  //console.log(response);
  let dogs = await response.json();
  console.log(dogs);

  const main = document.querySelector('main');
  main.innerHTML = `<img src='${dogs.message}'>`;

};

window.addEventListener('load', getDog);



//Iteration 2 -> Rates

async function getRates() {
  let response = await fetch ("https://api.exchangeratesapi.io/latest")
  console.log(response)
  let currencies = await response.json()
  console.log(currencies);

}


let currenciesDisplay = async () => {
  const response = await fetch ("https://api.exchangeratesapi.io/latest")
  const rates = await response.json();
  console.log(rates);
  const select = document.createElement('select');
  console.log(select);

  for (const key in rates) {
    let option = document.createDocument('option');
    console.log(option);
    option.innerHTML = `${key}: ${rates[key]}`; 
    select.appendChild(option);
  }
}

document.getElementById("main").appendChild(select);


