let color = "black";
let click = true

function gridMaker (size) {
   let container = document.querySelector('.container');
   
   container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
   container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

   let grid = size * size;

   for (let i=0; i < grid; i++) {
      
     let square = document.createElement('div');
     square.className= 'squaregrid';
     square.addEventListener("mouseover", changeCouleur);
     square.style.backgroundColor = "white";
     
     
    
      container.appendChild(square)
       
   }
  
}

 gridMaker(16);


function gridChange(input) {
  if (input >= 0 && input <= 100) {
   gridMaker(input);
  } else {
     console.log('Error!too many squares');
  }
  
}




function changeCouleur(choice) {
  if (click) {
   if (choice === "random") {
   this.style.backgroundColor = `hsl({$(Math.random() * 360}, 100%, 50%)`;
  } else {
   this.style.backgroundColor = color;
  } }
}



function reset() {
   let squares = document.querySelectorAll('div');
   squares.forEach((div) => div.remove());
}



function ChangeColor(choice){
   color = choice;
}









