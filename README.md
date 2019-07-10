![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# JS | Fetch - Getting information from the internet


In this exercise, we will connect to different API's across the internet to get information and display that information in our website using DOM manipulation. The API's that we are going to use are:
 - https://dog.ceo/api/breeds/image/random
 - https://api.exchangeratesapi.io/latest
 - https://dev-js-explained-api.pantheonsite.io/wp-json/wp/v2/posts?per_page=5
 - https://dev-js-explained-api.pantheonsite.io/wp-json/wp/v2/posts/POST_ID


## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your computer.

## Submission Instructions

Upon completion, run the following commands
```
$ git add .
$ git commit -m "done"
$ git push origin master
```
Navigate to your repo and create a Pull Request -from your master branch to the original repository master branch.

In the Pull request name, add your name and last names separated by a dash "-"

## Deliverables

Write your JavaScript in the provided `app.js` file. Submitting this file will be enough.

## Iteration 1 - <small>Do your first basic fetch request</small>

### Call the API
Write out a basic Fetch API call using `fetch()` and then a `.then()` to convert the response to JSON, then another `.then()` to do something with the data.  Finally, add a `.catch()` statement

Test out your basic Fetch API setup above by making a call to this API url and logging the results: https://dog.ceo/api/breeds/image/random .  You should get something like this:
```
{
 "status": "success",
 "message":"https://images.dog.ceo/breeds/akita/Akina_Inu_in_Riga_1.JPG"
 }
 ```

### Display the result
Modify the Fetch API call above to log out markup for an image of the dog image:
```
<img src="{data.message}" alt="Random Photo of a Dog" />
```

And add this new markup to the DOM once we have the information.

### Refactor

Take your Fetch API setup and put it into a function called `getDog()`.  Then create an async function called `initDogApi()`.  Inside of this function create a variable called `dogPic` that awaits `getDog()` to return the data.  Remember, you will need to modify your final `.then()` statement to return the correct data instead of logging it out to the console.

- For this iteration you will need the `async` and `await` keywords.

## Iteration 2 - <small>Let's build something usefull</small>


### Basic set-up

Make a fetch request to the following Foreign exchange rates API 
with currency conversion: https://api.exchangeratesapi.io/latest.  Log out the results of the query.

Similar to the first iteration. Move the fetch request to it's own function called `getRates()` that returns the Fetch Promise.  Create a new function called `initRates()` with a variables called exchange that awaits `getRates()`.  Test by calling `initRates()` and make sure you have the same results as before.

### Display the results
Build markup for a select field with an option for each of the rates.  You may need to use a for in loop to iterate over the rates object. 

  - Probably you will need to use some kind of structure like the folowwing:

````
let markup = `<select id="rates">`

// your code

markup += `</select>`
````

Add the options list markup to the page.  Then attach a "change" listener to the select field that logs out the value of the section field whenever there is a change.

## Iteration 2 Bonus

Don't get stuck on this exercise, if you feel you can't do it yet, jump to iteration 3.

Now, modify the `getRates()` function to take a "base" parameter that let's you select what currency you are requesting.  The format will look something like below.
````
function getRates(base = EUR) {
  return fetch(`https://api.exchangeratesapi.io/latest?base=${base}`)
    
           .then(response => response.json())
    
           .then(data => data)
    
           .catch(error => console.error(error));
}
````
Finally, build a user interface that shows what currency you are using as a base and displays the conversion rate when you change the drop down value.

## Iteration 3 - <small>Get details</small>

Make a fetch request to the following WordPress API endpoint and log the 5 latest posts to the console: https://dev-js-explained-api.pantheonsite.io/wp-json/wp/v2/posts?per_page=5

Note. Maybe you will have to use the next syntax to pass the CORS problem:
````
var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://dev-js-explained-api.pantheonsite.io/wp-json/wp/v2/posts?per_page=5'
fetch(proxyUrl + targetUrl)
````



Now create a new function called `getPosts( numPosts )` that will return the fetch request for the posts and let you pass in a number of pages in to get.  Create another function called `initPosts()` with a variable called `posts` that awaits the results of `getPosts( 5 )`.

### Display the results
Take the pages from the last exercise and create an unordered list with the following format for each list item 
````
<li><a data-id="POST_ID" href="POST_URL">POST_TITLE</a></li>.
````
Add the list of posts to the page.

### Generate the details of each post
Attach an event listener to each `post` link that prevents the link from being clicked and goes out to fetch that post data using the format in the URL below. 

Note, you can get the post ID from the data attribute like this: `el.dataset.id`. When you get the post data back, display it on the page along with the title of the post below the list of posts. https://dev-js-explained-api.pantheonsite.io/wp-json/wp/v2/posts/POST_ID

## Extra Resources

- [fetch MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

- [Promise MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

- [async await MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

- [async await JavaScript.info](https://javascript.info/async-await)
