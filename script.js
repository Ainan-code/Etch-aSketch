
function gridMake (a, b, _tracksize, gridElement) {
   gridElement.style.display = "grid";
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
