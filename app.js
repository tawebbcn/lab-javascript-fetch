'use strict';

function main() {
  let randomImg= async()=>{
    let response = await fetch('https://dog.ceo/api/breeds/image/random');
    let images= await response.json();
    let src= document.getElementById('doggie');
    src.setAttribute('src', images.message);
    return images.message;
  }
  randomImg();
   

  let randomCurrencie=async()=>{
    let response= await fetch('https://api.exchangeratesapi.io/latest');
    let currencies= await response.json();
    let divisas= currencies.rates;
    const select= document.createElement('select');
    for (const key in divisas){
      let option= document.createElement("option")
      option.innerHTML=`${key}: ${divisas[key]}`
      select.appendChild(option)

    }
    document.getElementById("main").appendChild(select);
  
  }
  randomCurrencie();


  console.log('Your code goes here');
  console.log('Happy coding!');
};

window.addEventListener('load', main);