
function gridMaker (size) {
   let container = document.querySelector('.container');
   
   container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
   container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

   let grid = size * size;

   for (let i=0; i < grid; i++) {
      
     let square = document.createElement('div');
     square.className= 'squaregrid';
     square.addEventListener('mouseover', changeColor)
     square.addEventListener('mouseover', Randomrgb)
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








function reset() {
   
   let squares = document.querySelectorAll('.squaregrid');
   squares.forEach((div) => div.remove());
   gridMaker(16);
}


 function Randomrgb () {
    let btnrandom = document.querySelector('#btnrandom')
    btnrandom.addEventListener('click', (e) => {
      let a = Math.floor(Math.random() * 256)
      let b = Math.floor(Math.random() * 256)
      let c = Math.floor(Math.random() * 256)
      return this.style.backgroundColor=`rgb(${a},${b},${c})`
   })
  
 }




  function changeColor () {
    
        this.style.backgroundColor = "black"
   
   }
  

