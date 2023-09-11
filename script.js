const container = document.querySelector('.container')
const btnBlack = document.createElement('button')
const btnGray = document.createElement('button')
const btnRGB = document.createElement('button')
const btnSize = document.createElement('button')
const btnReset = document.createElement('button')
const section = document.querySelector('.section')
const buttonsContainer = document.querySelector('.buttons')

// Create grid dynamically using divs
function createDivs(col, rows) {
    
    for(let i = 0; i < (col * rows); i++){
        const div = document.createElement('div')
        div.style.border = '1px solid black'
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box')
    }
}


createDivs(16,16)

function gridSize() {
    //const boxs = container.querySelectorAll('.box')
    btnSize.className = 'btn btn-danger';
    btnSize.textContent = 'Grid Size';
    btnSize.addEventListener('click', () => {
        let user = prompt('What size do you want for the grid?')
        if(user === null || user < 1) {
            createDivs(16, 16);
            blackColor();
            grayColor();
            rgbColor();
            resetBtn();
        } else {
            createDivs(user, user);
            blackColor()
            grayColor()
            rgbColor()
            resetBtn()
        }
    })
    
    buttonsContainer.appendChild(btnSize)
}
gridSize()

function blackColor() {
    const boxs = container.querySelectorAll('.box')
    btnBlack.className = 'btn btn-dark';
    btnBlack.textContent = 'Black';
    btnBlack.addEventListener('click', () =>{
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            //let Rnum = Math.floor(Math.random() * 25);
            let blackScale = `rgb(${0}, ${0}, ${0})`
            box.style.background = blackScale;
        }))
    })

    buttonsContainer.appendChild(btnBlack)
}
blackColor()

function grayColor() {
    const boxs = container.querySelectorAll('.box')
    btnGray.className = 'btn btn-secondary';
    btnGray.textContent = 'Gray';
    btnGray.addEventListener('click', () =>{
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let Rnum = Math.floor(Math.random() * 256);
            let grayScale = `rgb(${Rnum}, ${Rnum}, ${Rnum})`
            box.style.background = grayScale;
        }))
    })

    buttonsContainer.appendChild(btnGray)
}
grayColor()

function rgbColor() {
    const boxs = container.querySelectorAll('.box')
    btnRGB.className = 'btn btn-warning';
    btnRGB.textContent = 'Random';
    btnRGB.addEventListener('click', () =>{
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            let randomScale = `rgb(${r}, ${g}, ${b})`
            box.style.background = randomScale;
        }))
    })

    buttonsContainer.appendChild(btnRGB)
}
rgbColor()

function resetBtn() {
    const boxs = container.querySelectorAll('.box')
    btnReset.className = 'btn btn-primary';
    btnReset.textContent = 'Reset';
    btnReset.addEventListener('click', () => {
        boxs.forEach(box => {
            box.style.background = `rgb(${255}, ${255}, ${255})`
        })
    })

    


buttonsContainer.appendChild(btnReset)
}
resetBtn()

