// here is the javascript for a calculator app

// note to self: there is a 0 on the display from the html that stays on the screen during the first button click

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
let sum = 0;
let temp = '';
let pars = 0;
let combo = 0;

// here are the functions for the operations buttons ///////////////////////////////////////////////

// this is the function for the addition button
const pluss = document.querySelector('#pluss');
pluss.addEventListener('click', () => {
    if (combo != 0){
        pars = parseFloat(sum);
        combo = operate(combo, operator, pars);
        console.log('combo');
        console.log(combo);
        sum = '';
        displae.textContent = combo;
        operator = '+';
    }
    if (combo === 0){
        pars = parseFloat(sum);
        console.log('pars');
        console.log(pars);
        combo = pars;
        console.log('combo');
        console.log(combo);
        sum = '';
        displae.textContent = combo;
        operator = '+';
    }
    
    
     // this code makes the node symbol blink when clicked
     pluss.classList.add('blink'); 
     setTimeout(() => pluss.classList.remove('blink'), 200);
});
// this is the function for the subtraction button
const subtruct = document.querySelector('#subtruct');
subtruct.addEventListener('click', () => {
    if (combo != 0){
        pars = parseFloat(sum);
        combo = operate(combo, operator, pars);
        console.log('combo');
        console.log(combo);
        sum = '';
        displae.textContent = combo;
        operator = '-';
    }
    if (combo === 0){
        pars = parseFloat(sum);
        console.log('pars');
        console.log(pars);
        combo = pars;
        console.log('combo');
        console.log(combo);
        sum = '';
        displae.textContent = combo;
        operator = '-';
    }
    

     // this code makes the node symbol blink when clicked
     subtruct.classList.add('blink'); 
     setTimeout(() => subtruct.classList.remove('blink'), 200);
});
// this is the code for the division button
const divides = document.querySelector('#divides');
divides.addEventListener('click', () => {
    if (combo != 0){
        pars = parseFloat(sum);
        combo = operate(combo, operator, pars);
        console.log('combo');
        console.log(combo);
        sum = '';
        displae.textContent = combo;
        operator = '/';
    }
    if (combo === 0){
        pars = parseFloat(sum);
        console.log('pars');
        console.log(pars);
        combo = pars;
        console.log('combo');
        console.log(combo);
        sum = '';
        displae.textContent = combo;
        operator = '/';
    }
    
    
     // this code makes the node symbol blink when clicked
     divides.classList.add('blink'); 
     setTimeout(() => divides.classList.remove('blink'), 200);
});
// this is the function for the multiplication button
const multiplier = document.querySelector('#multiplier');
multiplier.addEventListener('click', () => {
    if (combo != 0){
        pars = parseFloat(sum);
        combo = operate(combo, operator, pars);
        console.log('combo');
        console.log(combo);
        sum = '';
        displae.textContent = combo;
        operator = '*';
    }
    if (combo === 0){
        pars = parseFloat(sum);
        console.log('pars');
        console.log(pars);
        combo = pars;
        console.log('combo');
        console.log(combo);
        sum = '';
        displae.textContent = combo;
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
    pars = parseFloat(sum);
    console.log('pars');
    console.log(pars);
    combo = operate(combo, operator, pars);
    console.log('combo');
    console.log(combo);
    sum = '';
    if (!isInt(combo)){
        combo = combo.toFixed(3);
    }
    displae.textContent = combo;
    combo = 0;
    operator = '';

     // this code makes the node symbol blink when clicked
     equal.classList.add('blink'); 
     setTimeout(() => equal.classList.remove('blink'), 200);
});

// here is the function for the clear button

const ac = document.querySelector('#ac');
ac.addEventListener('click', () => {
    temp = '';
    sum = '';
    combo = 0;
    displae.textContent = '0';
     // this code makes the node symbol blink when clicked
     ac.classList.add('blink'); 
     setTimeout(() => ac.classList.remove('blink'), 200);
});


// these are the functions that display the numbers on the screen when clicked //////////////////////////////////////////////
// they also add to the sum variable I will use for other functions

const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    temp = '0';
    sum = sum + temp;
    displae.textContent = sum;

    zero.classList.add('blink'); 
    setTimeout(() => zero.classList.remove('blink'), 200);
});

const one = document.querySelector('#one');
one.addEventListener('click', () => {
    temp = '1';
    sum = sum + temp;
    displae.textContent = sum;

    one.classList.add('blink');
    setTimeout(() => one.classList.remove('blink'), 200);
});

const two = document.querySelector('#two');
two.addEventListener('click', () => {
    temp = '2';
    sum = sum + temp;
    displae.textContent = sum;

    // this code makes the node symbol blink when clicked
    two.classList.add('blink'); 
    setTimeout(() => two.classList.remove('blink'), 200);
});

const three = document.querySelector('#three');
three.addEventListener('click', () => {
    temp = '3';
    sum = sum + temp;
    displae.textContent = sum;

    // this code makes the node symbol blink when clicked
    three.classList.add('blink'); 
    setTimeout(() => three.classList.remove('blink'), 200);
});

const four = document.querySelector('#four');
four.addEventListener('click', () => {
    temp = '4';
    sum = sum + temp;
    displae.textContent = sum;

    // this code makes the node symbol blink when clicked
    four.classList.add('blink'); 
    setTimeout(() => four.classList.remove('blink'), 200);
});

const five = document.querySelector('#five');
five.addEventListener('click', () => {
    temp = '5';
    sum = sum + temp;
    displae.textContent = sum;

    // this code makes the node symbol blink when clicked
    five.classList.add('blink'); 
    setTimeout(() => five.classList.remove('blink'), 200);
});

const six = document.querySelector('#six');
six.addEventListener('click', () => {
    temp = '6';
    sum = sum + temp;
    displae.textContent = sum;

    // this code makes the node symbol blink when clicked
    six.classList.add('blink'); 
    setTimeout(() => six.classList.remove('blink'), 200);
});

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    temp = '7';
    sum = sum + temp;
    displae.textContent = sum;

    // this code makes the node symbol blink when clicked
    seven.classList.add('blink'); 
    setTimeout(() => seven.classList.remove('blink'), 200);
});

const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    temp = '8';
    sum = sum + temp;
    displae.textContent = sum;

    // this code makes the node symbol blink when clicked
    eight.classList.add('blink'); 
    setTimeout(() => eight.classList.remove('blink'), 200);
});

const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    temp = '9';
    sum = sum + temp;
    displae.textContent = sum;

    // this code makes the node symbol blink when clicked
    nine.classList.add('blink'); 
    setTimeout(() => nine.classList.remove('blink'), 200);
});

const deci = document.querySelector('#deci');
deci.addEventListener('click', () => {
    temp = '.';
    sum = sum + temp;
    displae.textContent = sum;

     // this code makes the node symbol blink when clicked
     deci.classList.add('blink'); 
     setTimeout(() => deci.classList.remove('blink'), 200);
});



