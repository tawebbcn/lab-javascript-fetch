'use strict';

function main() {

  const img = async () =>{

    const response = await fetch('https://dog.ceo/api/breeds/image/random'); 
    const myJson = await response.json();
    const imgTag = [...document.getElementsByTagName('img')]
    const setAt = await imgTag[0].setAttribute('src',myJson.message)
  }
 img()

 const currencys = async () => {
    const response = await fetch('https://api.exchangeratesapi.io/latest')
    const jason = await response.json();
    const rates = await jason.rates
    
    let ratesArray = []
    console.log(ratesArray)
    let aux = Object.entries(rates).forEach(([key, value]) =>{
      ratesArray.push(`${key} ${value}`)
    })
    
    let select = document.querySelector('select')
    console.log(select)
    for(let i=0; i < ratesArray.length; i++){
      let option = document.createElement('option')
      option.innerText = ratesArray[i]
      select.appendChild(option)
    }
 }

currencys()
  console.log('Happy coding!');
};

window.addEventListener('load', main);