const container = document.querySelector('.container');
const buttons = document.querySelector('.buttons');

// container.setAttribute('style', 'display: grid; grid-template-columns: 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px ; grid-template-rows:40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px  40px 40px 40px 40px;');

container.setAttribute('style', 'display: grid; grid-template-columns: repeat(16, 40px); grid-template-rows: repeat(16, 40px);');

for (let i = 0; i < (16 * 16) ; i++) {
    const div = document.createElement('div');
    div.setAttribute('style', 'border: 1px solid white;');
    container.appendChild(div);
    container.insertBefore(div, buttons);
}

