/**
 * 
 */
// creating a new instance of XMLHTTPRequest
//var ourRequest = new XMLHttpRequest();
// first argument allows us to send data, second is the url we want to use
//ourRequest.open('GET','https://swapi.co/api/vehicles/4/?format=json');
//
//ourRequest.onload = function() { // what we want to happen when loaded - anonymous function
////	console.log(ourRequest.responseText); // accessing the data
//	var content = JSON.parse(ourRequest.responseText); // need to use the JSON parse to let the browser know that this is json data
//	console.log(content.name); 
//};
//
//ourRequest.send(); need to send the data

var pageCounter = 1;
var swapiContainer = document.getElementById("info");
var btn = document.getElementById("btn"); // create variable first to point to btn

// then add an event listener
btn.addEventListener("click", function() { 
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://swapi.co/api/people/' + pageCounter + '/?format=json');
  ourRequest.onload = function() {
    //if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
//    } else {
//      console.log("We connected to the server, but it returned an error.");
//    }
    
  };

//  ourRequest.onerror = function() {
//    console.log("Connection error");
//  };

  ourRequest.send();
  pageCounter++;
  if (pageCounter > 15) {
    btn.classList.add("hide-me"); // adjusts the class list and adds the hide me option
  }
});

// to render html on the page
function renderHTML(data) {
  var htmlString = "<p>" + data.name+"</p>";
  // do a hard coded value in the second param first to understand how this works
  swapiContainer.insertAdjacentHTML('beforeend', htmlString);
}