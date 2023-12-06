
// part one
function addition(a,b){
    console.log (a + b) ;
}

function subtraction (a,b){
    console.log( a - b)
}

function multiply (a,b){
    console.log(a * b)
}

function divide(a, b){
    console.log(a / b)
}

// part 2 

function numberOne(x){

}

function operator(){

}

function numberTwo(y){

}


// step three

function operate( operator , numberOne ,numberTwo){
    const result = 0;
    parseFloat(numberOne);
    parseFloat(numberTwo);
    switch (operator){
        case  '+':
            result= addition(numberOne , numberTwo);
            break;
        case '-':
            result = subtraction(numberOne , numberTwo) ;
            break;
        case '*':
            result = multiply(numberOne, numberTwo)  ;
            break;
        case '/':
            result = divide(numberOne, numberTwo) 
    }
    console.log(result);
}