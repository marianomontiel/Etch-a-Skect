const container = document.querySelector('.container');
const buttons = document.querySelector('.buttons');
const columns = 64;
const rows = 64;
const divSize = '10'
buttons.setAttribute('style', `width: ${columns * divSize}px`);

container.setAttribute('style', `display: grid; grid-template-columns: repeat(${columns}, ${divSize}px); grid-template-rows: repeat(${rows}, ${divSize}px);`);

for (let i = 0; i < (columns * rows); i++) {
  const div = document.createElement('div');
  div.setAttribute('style', 'background-color: white; border:1px solid lightgrey',);
  div.setAttribute('class', 'screen');
  container.insertBefore(div, buttons);

  var isMousedown = false;

  div.addEventListener("mousedown", function (event) {
    isMousedown = true;
    div.setAttribute('style', 'background-color: black;');
  });

  div.addEventListener("mouseup", function (event) {
    isMousedown = false;
  });

  div.addEventListener("mousemove", function (event) {
    if (isMousedown) {
      div.setAttribute('style', 'background-color: black;');

    } else { }
  });
}

const erase = document.querySelector('.button');
const screen = document.querySelectorAll('.screen');

const screen_array = [...screen]; // converts NodeList to array
screen_array.forEach(screen => {

  erase.addEventListener('mousedown', () => {
    screen.setAttribute('style', 'background-color: white; border:1px solid lightgrey');
    // screen.setAttribute('style', `background-color: rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}); border:1px solid lightgrey`);

  });

});

const magic = document.querySelector('.magic');
const body = document.querySelector('body');
magic.addEventListener('click', () => {
  if (body.style.background === 'rgb(255, 177, 204)') {
   body.setAttribute('style', 'background: #ffb1cc url(./drugs.gifv); background-size: cover;') 
  } else {
    body.setAttribute('style', 'background: #ffb1cc')
  }
  
  
});
body.style.background;