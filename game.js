var container = document.querySelector('.container');
const size = 32;
var screenSize = '360';

//Add button to prompt for desired resolution
const resolution = document.querySelector('#resolution');
resolution.addEventListener('click', () => { resolutionChange(); });

//Function for resolution prompt and DOM manipulation function
function resolutionChange() {
  const resolution = prompt('Choose screen resoltuion!');
  if (resolution > 0 && resolution <= 100) {
    container.setAttribute('style', `display: grid; grid-template-columns: repeat(${resolution}, ${(screenSize / resolution)}px); grid-template-rows: repeat(${resolution}, ${(screenSize / resolution)}px);`);

    //remove previous divs before appending the new ones
    const screen = document.querySelectorAll('.screen');
    const screen_array = [...screen]; // converts NodeList to array
    screen_array.forEach(screen => {
      container.removeChild(screen);
    });

    createDivs(resolution);
  }
};

container.setAttribute('style', `display: grid; grid-template-columns: repeat(${size}, ${(screenSize / size)}px); grid-template-rows: repeat(${size}, ${(screenSize / size)}px);`);

function createDivs(a) {
  for (let i = 0; i < (a * a); i++) {
    const div = document.createElement('div');
    div.setAttribute('style', 'background-color: white; border:1px solid lightgrey',);
    div.setAttribute('class', 'screen');
    container.appendChild(div);

    var isMousedown = false;
    div.addEventListener("mousedown", () => {
      isMousedown = true;
      div.setAttribute('style', 'background-color: black;');
    });
    div.addEventListener("mouseup", () => {
      isMousedown = false;
    });
    div.addEventListener("mousemove", () => {
      if (isMousedown) {
        if (body.style.background === 'rgb(32, 32, 32)') {
          div.setAttribute('style', 'background-color: black;');
        } else {
          div.setAttribute('style', `background-color: rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}); border:1px solid lightgrey`);
        }
      } else { }
    });
  }
}

createDivs(size);

const erase = document.querySelector('.button');

erase.addEventListener('mousedown', () => {
  const screen = document.querySelectorAll('.screen');
  const screen_array = [...screen]; // converts NodeList to array
  screen_array.forEach(screen => {
    screen.setAttribute('style', 'background-color: white; border:1px solid lightgrey');
  });
});


const magic = document.querySelector('.magic');
const body = document.querySelector('body');
body.setAttribute('style', 'background: rgb(32, 32, 32)');
magic.addEventListener('click', () => {
  if (body.style.background === 'rgb(32, 32, 32)') {
    body.setAttribute('style', 'background: rgb(32, 32, 32) url(./drugs.gifv); background-size: cover;');
  } else {
    body.setAttribute('style', 'background: rgb(32, 32, 32)');
  }
});
