const btns = document.querySelectorAll('.btn');
const record = document.querySelector('.record');
const result = document.querySelector('.result')
var text  = '';
var start = 0;
btns.forEach(btn =>{
    btn.addEventListener("click", function(e) {
        buttonClick(e.target.innerText);
    });
})

function buttonClick(value){
    if(isNaN(parseInt(value))){
        handleSymbol(value);
    }else{
        text += value
        result.textContent = text
    }
}

function handleSymbol(value){
    start = text.length - 1  ;
    switch(value){
        case 'AC':
            start = 0;
            text  = '';
            record.textContent = text
            result.textContent = text
            break;
        case 'del':
            text = text.slice(0,start)
            break;
        case '+':
            if( !(text[start] === '+') && !(text[start] === '-') && !(text[start] === '*') && !(text[start] === '/')  && !(text[start] === '.')){
                text += '+'  
            }
            break;
        case '-':
            if( !(text[start] === '+') && !(text[start] === '-') && !(text[start] === '*') && !(text[start] === '/') && !(text[start] === '.') ){
                text += '-'  
            }
            break;
        case '×':
            if( !(text[start] === '+') && !(text[start] === '-') && !(text[start] === '*') && !(text[start] === '/') && !(text[start] === '.') ){
                text += '*'  
            }
            break;
        case '÷':
            if( !(text[start] === '+') && !(text[start] === '-') && !(text[start] === '*') && !(text[start] === '/') && !(text[start] === '.') ){
                text += '/'  
            }
            break;
        case '.':
            if( !(text[start] === '+') && !(text[start] === '-') && !(text[start] === '*') && !(text[start] === '/') && !(text[start] === '.') ){
                text += '.'  
            }
            break;
        case '=':
            if(!text) return
            record.textContent = text
            text = new String( eval(text)  );
            break;
    }
    result.textContent = text
}


