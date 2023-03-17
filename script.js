//set variable accept user input and to use on css stylesheet
var dimension = "";

//since variables in css needs to be grounded or attached to :root, make variable to concatenate
var r = document.querySelector(':root');

//function to update the css variable by using new user input
function myFunction_set() {
    r.style.setProperty('--dimension', dimension)
}

//to add event listener functions later, set variables
const form = document.querySelector('form');
const container = document.querySelector('.main');
var gridItems;

//press submit to trigger function to update css variable which will divide the sketchpad in accordance with user input.
form.addEventListener('submit', (e) => {
    e.preventDefault();
    var intermediateDimension = document.getElementById("rowAndColumn").value;
    dimension = intermediateDimension;
    myFunction_set();
}) 

//make new divs under .container in order to specify which pixels get colored when hovered. 
function createGridItems(e) {
    e.preventDefault();
    for (let i = 1; i < ((dimension**2)+1); i++) {
        var div = document.createElement('div');
        div.className = 'gridItems'
        div.addEventListener('mouseover', (e) => {
            console.log('mouseover');
            //.chosen has a black background color so that the target on which the mouse hovers is colored black. 
            //add .chosen(the black color) whenever mouse is hovered over that particular pixel in sketchpad.
            e.target.classList.add('chosen');
        })
        container.appendChild(div);
    }
}

form.addEventListener('submit', createGridItems);
//Below is useless code. I wanted to have 'click' event turn on and off the pen, but I failed.
gridItems = document.querySelectorAll('gridItems');
