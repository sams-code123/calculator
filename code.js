// here is the javascript for the calculator app

// here I create functions for basic operations
function add(x, y){
    let sum = x + y;
    return sum;
}
function subtract(x, y){
    let sum = x - y;
    return sum;
}
function multiply(x, y){
    let sum = x * y;
    return sum;
}
function divide(x, y){
    let sum = x / y;
    return sum;
}

// here I declare variables for later use
let operator = 'none';
let output = 0;

// this is the operation function that calls the above functions using parameters
function operate(n1, op, n2){

    let final = 0;

    if (op === '+'){
       final = add(n1, n2);
       return final;
    }
    if (op === '-'){
        final = subtract(n1, n2);
        return final;
    }       
    if (op === '*'){
        final = multiply(n1, n2);
        return final;
    }
    if (op === '/'){
        final = divide(n1, n2);
        return final;
    }
    else {
        return 0;
    }
}   

// here I just declare variables for later use

const displae = document.querySelector('#screen');
let screen = '';
let temp = '';
let pars = 0;
let sum = 0;

// here are the functions for the operations buttons ///////////////////////////////////////////////

// this is the function for the addition button
const pluss = document.querySelector('#pluss');
pluss.addEventListener('click', () => {
    if (sum != 0 && operator != ''){
        pars = parseFloat(screen);
        console.log('are we here?');
        sum = operate(sum, operator, pars);
        screen = '';
        displae.textContent = sum;
        operator = '+';
    }
    if (sum === 0){
        pars = parseFloat(screen);
        sum = pars;
        screen = '';
        displae.textContent = sum;
        operator = '+';
    }
    if (operator === '' && sum != 0){
        console.log("now we're here");
        screen = '';
        displae.textContent = sum;
        operator = '+';
    }
    
    
     // this code makes the node symbol blink when clicked
     pluss.classList.add('blink'); 
     setTimeout(() => pluss.classList.remove('blink'), 200);
});
// this is the function for the subtraction button
const subtruct = document.querySelector('#subtruct');
subtruct.addEventListener('click', () => {
    if (sum != 0 && operator != ''){
        pars = parseFloat(screen);
        sum = operate(sum, operator, pars);
        screen = '';
        displae.textContent = sum;
        operator = '-';
    }
    if (sum === 0){
        pars = parseFloat(screen);
        sum = pars;
        screen = '';
        displae.textContent = sum;
        operator = '-';
    }
    if (operator === '' && sum != 0){
        console.log("now we're here");
        screen = '';
        displae.textContent = sum;
        operator = '-';
    }
    

     // this code makes the node symbol blink when clicked
     subtruct.classList.add('blink'); 
     setTimeout(() => subtruct.classList.remove('blink'), 200);
});
// this is the code for the division button
const divides = document.querySelector('#divides');
divides.addEventListener('click', () => {
    if (sum != 0 && operator != ''){
        pars = parseFloat(screen);
        sum = operate(sum, operator, pars);
        screen = '';
        displae.textContent = sum;
        operator = '/';
    }
    if (sum === 0){
        pars = parseFloat(screen);
        sum = pars;
        screen = '';
        displae.textContent = sum;
        operator = '/';
    }
    if (operator === '' && sum != 0){
        console.log("now we're here");
        pars = parseFloat(screen);
        screen = '';
        displae.textContent = sum;
        operator = '/';
    }
    
    
     // this code makes the node symbol blink when clicked
     divides.classList.add('blink'); 
     setTimeout(() => divides.classList.remove('blink'), 200);
});
// this is the function for the multiplication button
const multiplier = document.querySelector('#multiplier');
multiplier.addEventListener('click', () => {
    if (sum != 0 && operator != ''){
        pars = parseFloat(screen);
        sum = operate(sum, operator, pars);
        screen = '';
        displae.textContent = sum;
        operator = '*';
    }
    if (sum === 0){
        pars = parseFloat(screen);
        sum = pars;
        screen = '';
        displae.textContent = sum;
        operator = '*';
    }
    if (operator === '' && sum != 0){
        console.log("now we're here");
        screen = '';
        displae.textContent = sum;
        operator = '*';
    }
    
    
     // this code makes the node symbol blink when clicked
     multiplier.classList.add('blink'); 
     setTimeout(() => multiplier.classList.remove('blink'), 200);
});
// this weird little function is just to check if the final number when the equal button is clicked is a float or not
// I do this because if it's a float I automatically cut it down to 3 decimal places
function isInt(n) {
    return n % 1 === 0;
 }
//  this is the function for the equals button
const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    pars = parseFloat(screen);
    sum = operate(sum, operator, pars);
    screen = '';
    if (!isInt(sum)){
        sum = sum.toFixed(3);
    }
    displae.textContent = sum;
    console.log('did we get to equal coperator = ""?');
    operator = '';
    screen = '';
    temp = '';
     // this code makes the node symbol blink when clicked
     equal.classList.add('blink'); 
     setTimeout(() => equal.classList.remove('blink'), 200);
});

// here is the function for the clear button

const ac = document.querySelector('#ac');
ac.addEventListener('click', () => {
    temp = '';
    screen = '';
    sum = 0;
    operator = '';
    displae.textContent = '0';
     // this code makes the node symbol blink when clicked
     ac.classList.add('blink'); 
     setTimeout(() => ac.classList.remove('blink'), 200);
});


// these are the functions that display the numbers on the screen when clicked //////////////////////////////////////////////
// they also add to the sum variable I will use for other functions

const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    displae.textContent = ''; // this line gets rid of the initial leading 0
    temp = '0';
    screen = screen + temp;
    displae.textContent = screen;

    zero.classList.add('blink'); 
    setTimeout(() => zero.classList.remove('blink'), 200);
});

const one = document.querySelector('#one');
one.addEventListener('click', () => {
    displae.textContent = ''; // this line gets rid of the initial leading 0
    temp = '1';
    screen = screen + temp;
    displae.textContent = screen;

    one.classList.add('blink');
    setTimeout(() => one.classList.remove('blink'), 200);
});

const two = document.querySelector('#two');
two.addEventListener('click', () => {
    displae.textContent = ''; // this line gets rid of the initial leading 0
    temp = '2';
    screen = screen + temp;
    displae.textContent = screen;

    // this code makes the node symbol blink when clicked
    two.classList.add('blink'); 
    setTimeout(() => two.classList.remove('blink'), 200);
});

const three = document.querySelector('#three');
three.addEventListener('click', () => {
    displae.textContent = ''; // this line gets rid of the initial leading 0
    temp = '3';
    screen = screen + temp;
    displae.textContent = screen;

    // this code makes the node symbol blink when clicked
    three.classList.add('blink'); 
    setTimeout(() => three.classList.remove('blink'), 200);
});

const four = document.querySelector('#four');
four.addEventListener('click', () => {
    displae.textContent = ''; // this line gets rid of the initial leading 0
    temp = '4';
    screen = screen + temp;
    displae.textContent = screen;

    // this code makes the node symbol blink when clicked
    four.classList.add('blink'); 
    setTimeout(() => four.classList.remove('blink'), 200);
});

const five = document.querySelector('#five');
five.addEventListener('click', () => {
    displae.textContent = ''; // this line gets rid of the initial leading 0
    temp = '5';
    screen = screen + temp;
    displae.textContent = screen;

    // this code makes the node symbol blink when clicked
    five.classList.add('blink'); 
    setTimeout(() => five.classList.remove('blink'), 200);
});

const six = document.querySelector('#six');
six.addEventListener('click', () => {
    displae.textContent = ''; // this line gets rid of the initial leading 0
    temp = '6';
    screen = screen + temp;
    displae.textContent = screen;

    // this code makes the node symbol blink when clicked
    six.classList.add('blink'); 
    setTimeout(() => six.classList.remove('blink'), 200);
});

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    displae.textContent = ''; // this line gets rid of the initial leading 0
    temp = '7';
    screen = screen + temp;
    displae.textContent = screen;

    // this code makes the node symbol blink when clicked
    seven.classList.add('blink'); 
    setTimeout(() => seven.classList.remove('blink'), 200);
});

const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    displae.textContent = ''; // this line gets rid of the initial leading 0
    temp = '8';
    screen = screen + temp;
    displae.textContent = screen;

    // this code makes the node symbol blink when clicked
    eight.classList.add('blink'); 
    setTimeout(() => eight.classList.remove('blink'), 200);
});

const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    displae.textContent = ''; // this line gets rid of the initial leading 0
    temp = '9';
    screen = screen + temp;
    displae.textContent = screen;

    // this code makes the node symbol blink when clicked
    nine.classList.add('blink'); 
    setTimeout(() => nine.classList.remove('blink'), 200);
});

const deci = document.querySelector('#deci');
deci.addEventListener('click', () => {
    displae.textContent = ''; // this line gets rid of the initial leading 0
    temp = '.';
    screen = screen + temp;
    displae.textContent = screen;

     // this code makes the node symbol blink when clicked
     deci.classList.add('blink'); 
     setTimeout(() => deci.classList.remove('blink'), 200);
});



