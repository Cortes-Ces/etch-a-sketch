const container = document.querySelector('.container')
const btnBlack = document.createElement('button')
const btnGray = document.createElement('button')
const btnRGB = document.createElement('button')
const btnSize = document.createElement('button')
const buttonsContainer = document.createElement('buttons')

// Create grid dynamically using divs
function createDivs(col, rows) {
    for(let i = 0; i < (col * rows); i++){
        const div = document.createElement('div')
        container.style.border = '1px solid black';
        div.style.border = '1px solid '
        container.style.gridTemplateColumns = `repeat(${col}, ifr)`;
        container.style.gridTemplateRows = `repeat(${rows}, ifr)`;
        container.appendChild(div).classList.add('box')
    }
}

createDivs(16, 16)

