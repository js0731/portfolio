const squares = document.querySelectorAll('.square');
const reset = document.querySelector('.reset');
const modeBtn = document.querySelectorAll('.mode');
const h1 = document.querySelector('h1');
const span = document.querySelector('span');
let num = 6;
let colors = [];
let ans = ''

for (let i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener('click', setMode)
}
for (let i = 0; i < num; i++) {
    squares[i].addEventListener('click', match)
}
reset.addEventListener('click', init)

function setMode() {
    modeBtn[0].classList.remove('selected');
    modeBtn[1].classList.remove('selected');
    this.classList.add('selected');
    num = (this.textContent === 'Easy') ? 3 : 6;
    span.textContent = ''
    randomColor()
    setSquares()
}

function randomColor() {
    colors = [];
    for (let i = 0; i < num; i++) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        colors.push(`rgb(${r}, ${g}, ${b})`)
    }
    ans = colors[Math.floor(Math.random() * colors.length)];
    h1.textContent = ans
}

function setSquares() {
    for (let i = 0; i < 6; i++) {
        squares[i].style.background = '#1e272e'
    }
    for (let i = 0; i < num; i++) {
        squares[i].style.background = colors[i]
    }
}

function match() {
    console.log(this)
    if (ans === this.style.background) {
        span.textContent = 'Great!'
        alert('YES');
        console.log(ans, this.style.background)
    } else {
        span.textContent = 'Try Again!'
        console.log(ans, this.style.background)
        this.style.background = '#1e272e'
    }
}

function init() {
    randomColor()
    setSquares()
}

init()
