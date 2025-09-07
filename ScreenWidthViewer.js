const displayDiv = document.getElementById("screenWidth");
console.log("js loaded");
let width = screen.width;
console.log(width);
const body = document.getElementsByTagName("body")[0];


//Root Element default Value
const DefaultRemValue = 16;




window.addEventListener("resize", function () {

    let width = screen.width;
    let wInRem = width / DefaultRemValue;


if (document.getElementById("widthView")){
    document.getElementById("widthView").remove();
}

const newDiv = document.createElement('div');
newDiv.textContent = width + 'px '+ wInRem + 'rem';

//Width display styling
newDiv.style.background = '#CFCFfF';
newDiv.style.position = "absolute";
newDiv.style.top = "1rem";
newDiv.style.left = '50%';
newDiv.style.transform = 'translateX(-50%)';
newDiv.style.padding = '0.25rem 0.5rem';
newDiv.style.borderRadius = '0.5rem';
newDiv.id = 'widthView';


body.appendChild(newDiv);

   setTimeout(() => {
       newDiv.remove();
   }, 1000)
});


/* 
How to use.

2- Link this JS file to your HTML file.

<script src="widthDisplay.js" defer></script>

Enjoy */