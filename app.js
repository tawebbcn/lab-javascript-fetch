//'use strict';



async function main() {
  let perrosTotal = await fetch ('https://dog.ceo/api/breeds/image/random')
  let imgRandom = await perrosTotal.json();
  console.log(imgRandom);
  console.log('Happy coding!');
  const container = document.querySelector('.container')
  container.innerHTML=`<img src="${imgRandom.message}" alt="foto de perro">`
};



async function money (){
  const moneyApi = await fetch('https://api.exchangeratesapi.io/latest')
  const allMoney = await moneyApi.json();
  const select = document.createElement('select')
  for(const key in allMoney.rates){
  let option = document.createElement('option')
  option.innerHTML = `${key}: ${allMoney.rates[key]}`
  select.appendChild(option);
}
document.querySelector('.pie').appendChild(select)
}

window.addEventListener('load', main)
window.addEventListener('load', money);