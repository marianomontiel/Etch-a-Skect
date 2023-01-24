const container = document.querySelector('.container');
const buttons = document.querySelector('.buttons');
const columns = 16;
const rows = 16;

container.setAttribute('style', 'display: grid; grid-template-columns: repeat(16, 40px); grid-template-rows: repeat(16, 40px);');

for (let i = 0; i < (16 * 16) ; i++) {
    const div = document.createElement('div');
    div.setAttribute('style', 'border: 1px solid white;');
    container.appendChild(div);
    container.insertBefore(div, buttons);
    div.addEventListener('click', () => {
        div.setAttribute('style', 'background-color: black;');
      });
}

addEventListener