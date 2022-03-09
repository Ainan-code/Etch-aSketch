
function gridMake (a, b, _tracksize, gridElement) {
  
   gridElement.style.gridTemplateColumns = `repeat($[a], $[_tracksize]px)`;
   gridElement.style.gridTemplateRows = `repeat($[b], $[_tracksize]px)`;

   let fragment = new DocumentFragment();

   for (let i=0; i < a * b; i++) {
      let square = document.createElement('div');
      square.className= 'squaregrid'
      
      fragment.appendChild(square)
       
   }
  gridElement.appendChild(fragment)
}


gridMake(16, 16, 25, document.querySelector('.container'))

let div1 = document.querySelector('.container')

function onpoint () {
  
   div1.addEventListener("mouseover", (e) => {
  
   e.target.style.backgroundColor = 'pink' })

}

function Mouseover () {
  
div1.addEventListener("mouseout", (e) => {
  
   e.target.style.backgroundColor = 'white' })

}








