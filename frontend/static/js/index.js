import {getCountries} from "./countries.js";

const countries = getCountries();

console.log(countries); 
window.addEventListener("DOMContentLoaded", setEvents);

function setEvents() {
  // let targetButton = document.querySelector("#test");
  // targetButton.addEventListener("click", buttonTapped );

  // attach event functions to elements
  let moon = document.getElementById("moon");
  function switchMode() {
      if(moon.className=="moon"){
        moon.className="sun";
        document.body.style.backgroundColor = "#202c37";
        document.body.style.color = "#fafafa";
      }
    else {
      moon.className ="moon";
      document.body.style.backgroundColor = "#fafafa";
      document.body.style.color = "#202c37";
    }
  }
  moon.addEventListener('click', switchMode)

}

function buttonTapped(){
  console.log("button tapped")
}

// function myFunction() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
// }