let turn = 0;

function press(index) {
    let btn = document.querySelectorAll('.btn')[index];
    if (btn.classList.contains('disable')) {
        alert('點過了!!!')
        return
    } else if (turn % 2 === 0 && turn < 10) {
        btn.textContent = 'O';
        btn.classList.add('disable', 'O');
        if (checkWin('O')) {
            alert('Winner O');
            turn = 10
        }
    } else if (turn % 2 === 1 && turn < 10) {
        btn.textContent = 'X';
        btn.classList.add('disable', 'X');
        if (checkWin('X')) {
            alert('Winner X');
            turn = 10
        }
    }

    turn += 1;
    if (turn === 9) {
        alert('平手!!!')
    }
}

function checkWin(symbol) {
    let btn = document.querySelectorAll('.btn')
    console.log(btn);
    if (btn[0].classList.contains(symbol) && btn[1].classList.contains(symbol) && btn[2].classList.contains(symbol) ||
        btn[3].classList.contains(symbol) && btn[4].classList.contains(symbol) && btn[5].classList.contains(symbol) ||
        btn[6].classList.contains(symbol) && btn[7].classList.contains(symbol) && btn[8].classList.contains(symbol) ||
        btn[0].classList.contains(symbol) && btn[3].classList.contains(symbol) && btn[6].classList.contains(symbol) ||
        btn[1].classList.contains(symbol) && btn[4].classList.contains(symbol) && btn[7].classList.contains(symbol) ||
        btn[2].classList.contains(symbol) && btn[5].classList.contains(symbol) && btn[8].classList.contains(symbol) ||
        btn[0].classList.contains(symbol) && btn[4].classList.contains(symbol) && btn[8].classList.contains(symbol) ||
        btn[2].classList.contains(symbol) && btn[4].classList.contains(symbol) && btn[6].classList.contains(symbol)
    )
        return true;
    else
        return false;
}
function reset() {
    turn = 0;
    let btns = document.querySelectorAll('.btn')
    btns.forEach(function (btn) {
        btn.textContent = '+';
        btn.classList.remove('O', 'X', 'disable');
    })
}