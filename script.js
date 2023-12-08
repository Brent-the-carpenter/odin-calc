let numButtons = document.querySelectorAll('.number');
let operatorButton = document.querySelectorAll('.operation')
let screen = document.querySelector('.screen');
let equalsButton = document.querySelector('#equals');
let clearButton = document.querySelector('#clear')
let numberOne = 0;
let numberTwo = 0;
let tempNumberOne = [];
let tempNumberTwo = [];
let tempOperatorArray = []
let savedFirstValue = 0;
let operator = ''
let result = ''

// part one
function addition(a,b){
    let addValue = (a + b);
    let rounded = Math.round((addValue + Number.EPSILON)* 100) / 100;
    rounded = rounded.toFixed(2);
    result = rounded;
    console.log (a + b) ;
}

function subtraction (a,b){
    let subtract = (a - b);
    let rounded = Math.round((subtract + Number.EPSILON)* 100) / 100;
    console.log(rounded)
    rounded = rounded.toFixed(2);
    result = rounded;
    console.log( subtract)
}

function multiply (a,b){
    let multiply = (a * b);
    let rounded = Math.round((multiply + Number.EPSILON)* 100) / 100;
    rounded = rounded.toFixed(2);
    result = rounded;
    console.log(multiply)
}


function divide(a, b){
    let division = (a / b);
        if ( a === 0 || b === 0){
            alert('Error! Can not divide by zero! Come on this is elementry math!!');
            location.reload();
        }else{
        let rounded = Math.round((division + Number.EPSILON)* 100) / 100;
        rounded = rounded.toFixed(2);
        result = rounded;
        console.log(result)
        };
}


function operate( operator , numberOne ,numberTwo){
    console.log(operator);
    console.log(numberOne);
    console.log(numberTwo);
    
    switch (operator){
        case  '+':
             addition(numberOne , numberTwo);
            break;
        case '-':
             subtraction(numberOne , numberTwo) ;
            break;
        case 'x':
             multiply(numberOne, numberTwo)  ;
            break;
        case '/':
             divide(numberOne, numberTwo) 
            break;
            default:
                alert('Error! did not recive an operator as excpected')
    };
    
    tempNumberTwo = [];
}


numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        savedFirstValue = button.getAttribute('value')
        if (tempOperatorArray == ''){
           tempNumberOne.push(savedFirstValue);
           numberOne = tempNumberOne.join('');
           screen.textContent = numberOne;
        }
        else{
            tempNumberTwo.push(savedFirstValue);
            numberTwo =  tempNumberTwo.join ('');
             screen.textContent = numberTwo;
        }
        
    });
});


operatorButton.forEach((button) =>{
    button.addEventListener('click', () => {
        operator = button.getAttribute('value')
        tempOperatorArray.push(operator);
          screen.textContent = `${numberOne} ${operator}`;
    });
});


// clears calc screen and entrys
clearButton.addEventListener('click' , () => {
     location.reload()
})


equalsButton.addEventListener('click', () => {
    numberOne = parseFloat(numberOne);
    numberTwo = parseFloat(numberTwo);
     operate( operator , numberOne, numberTwo);
        numberOne = result;
        screen.textContent = result
    }
);
  
//decimal fuctonality
 let decimalButton = document.querySelector('#decimal');
 
    decimalButton.addEventListener('click', () =>{
        let decimal = '..'
            if (screen.textContent.includes(decimal)){
                document.getElementById('decimal').disabled = true;
            }else{
                document.getElementById('decimal').disabled = false;
            }
    });

    let signChange = document.querySelector('#signChange');
        
        signChange.addEventListener('click', () =>{
            if ( operator === '' ){
                tempNumberOne.splice(0,1 , (tempNumberOne[0]* -1).toString());
                numberOne = tempNumberOne.join('');
                screen.textContent = numberOne;
            } else {
                tempNumberTwo.splice(0, 1, (tempNumberTwo[0] * -1).toString());
                numberTwo = tempNumberTwo.join('')
                screen.textContent = numberTwo;
                
            }
        })