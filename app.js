'use strict';

// Define API urls
const dogApi = 'https://dog.ceo/api/breeds/image/random/';
const exchangeApi = 'https://api.exchangeratesapi.io/latest/';
const postsApi = 'https://dev-js-explained-api.pantheonsite.io/wp-json/wp/v2/posts';
const proxy = 'https://cors-anywhere.herokuapp.com/';

// Update the home page with a random dog picture
function placeDogPicture(data) {
  let tag = document.querySelector('#dog-picture');
  tag.innerHTML = `<img class="card-img-top" src="${data.message}" alt="Random Photo of a Dog">`;
}

// Place the currencies in the home page's selector
function placeRate(currency, rate) {
  let tag = document.querySelector('#currency');
  let option = document.createElement("option");
  option.appendChild(document.createTextNode(currency));
  option.value = rate;
  tag.appendChild(option);
}

// Place the exchange rate in the home page
function getExchange(value) {
  document.querySelector('#rate').innerText = value;
}


// Extract the exchange rate information from the API's JSON file
function getRates(data) {
  let rates = Object.entries(data.rates);
  for (const [currency, rate] of rates) {
    placeRate(currency, rate);
  }
}

// Get the latest posts
function getPosts(data) {
  let posts = [...data];
  posts.forEach(placePost);
}

// Place the latest 5 posts in the home page
function placePost(data) {
  // Create new list element
  let option = document.createElement("li");
  // Get post title
  let textnode = document.createTextNode(data.title.rendered);
  // Append to html
  option.appendChild(textnode);
  document.getElementById("posts").appendChild(option);

  // Add event listener to each post title
  option.addEventListener("click", function () {
    placePostDetails(data);
  });
}

// Place post details in html
function placePostDetails(data) {
  document.querySelector('#post').innerHTML = `
    <h4>${data.title.rendered}</h4>
    <h5 class="text-danger">${(data.date).slice(0,10)}</h5>
    ${data.excerpt.rendered}`
  post.appendChild(div);
}

// Get data from JSON API using async/await
async function getApiAsync(url, args) {
  let response = await fetch(url + args);
  let data = await response.json();
  return data;
}

function main() {
  
  // Call the async function and send dog picture to the placement function
  getApiAsync(dogApi)
    .then(function (data) {
      placeDogPicture(data);
    });

  // Call the async function and send the exchange rates to the placement function
  getApiAsync(exchangeApi, '')
    .then(function (data) {
      getRates(data);
    });

  // Call the async function and send the latest five posts to the placement function
  getApiAsync(postsApi, '?per_page=5')
    .then(function (data) {
      getPosts(data);
    });
};

window.addEventListener('load', main);