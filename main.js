// const e = require("express");

// Write your JavaScript code here!

let btn = document.getElementById("calculate-button");

var planets = [ 
    ['Pluto', 0.06], 
    ['Neptune', 1.148], 
    ['Uranus', 0.917], 
    ['Saturn', 1.139], 
    ['Jupiter', 2.640], 
    ['Mars', 0.3895], 
    ['Moon', 0.1655], 
    ['Earth', 1], 
    ['Venus', 0.9032], 
    ['Mercury', 0.377], 
    ['Sun', 27.9] 
];

planets.forEach(function iterate(planet){
    let option= document.createElement("option");
    let select= document.getElementById("planets");
    option.value=planet[0];
    option.textContent=planet[0];
    select.appendChild(option);
});



function calculateWeight(userWeight, planetName) { 

for(i=0; i < planets.length; i++) {
    if (planetName == planets[i][0]){
        return (userWeight * planets[i][1]);
    }
}
} ;


function handleClickEvent() {
    // btn.addEventListener("click", function(){
        let userWeight = document.getElementById("user-weight").value;
        let planetName = document.getElementById("planets").value;
        console.log(userWeight);
        console.log(planetName);
    
        let result = calculateWeight(userWeight, planetName);


        console.log(result)

  document.getElementById("output").textContent = `If you were on ${planetName}, you would weigh ${result}lbs!`
   
} ;



    // 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.

    // 8. Make it look nice by attaching  a style.css file to your index.html and writing some basic styling, 
    // feel free to add classes and id's to the HTML elements as you need, 
    // import.a google font and use it for some or all of the text on your page. 


    // Bonus Challenges 
    // 8. Reverse the drop down order so that the sun is first.

