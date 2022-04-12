//addition 
const add = (a, b) => a + b;

//substraction
const subs = (a, b) => a - b;

//multiplication
const mult = (a, b) => a * b;

//division
const divs = (a, b) => b == 0 ? 'Don\'t break my calculator!' : a / b; 

//percentage
const perc = (operand, a, b) =>  {
    let tmp = (a * b)/100;
    if(operand == '+') {
        return a += tmp;
    } else if (operand == '-') {
        return a -= tmp;
    } else {
    return;
    }
};

// switch between operands
const operate = (operator, num1, num2) => {
    switch(operator) {
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subs(num1, num2);
            break;
        case "*":
            return mult(num1, num2);
            break;
        case "/":
            return divs(num1, num2);
            break;
        default:
            return "Game over";
    }
};


//grab screen and display numbers clicked
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let num1 = '';
let num2 = '';
let operand = '';

// function doing everything
const calculate = (e) => {
    let clicked = e.target.firstChild.textContent;
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let opr = ['+', '-', '/', '*'];
    let total = '';

    if(display.textContent.length <= 22) {
        if(clicked == 'AC') {
            display.textContent = '';
            num1 = '';
            num2 = '';
            operand = '';
        } else if(clicked == 'C') {
            if(num1 != '' && operand == '') {
                num1 = num1.split('').splice(0, num1.length -1).join('');
                display.textContent = `${num1}`;
            } else if( operand != '') {
                num2 = num2.split('').splice(0, num2.length -1).join('');
                display.textContent = `${num1} ${operand} ${num2}`;        }
        } else if(clicked == '.' && num2 != '' && num1 != '' && num2.indexOf('.') == -1) {
            num2 += '.';
            display.textContent = `${num1} ${operand} ${num2}`;
        } else if(clicked == '.' && num1 != '' && num1.indexOf('.') == -1) {
            num1 += '.';
            display.textContent = `${num1} ${operand} ${num2}`;
        } else if(numbers.indexOf(clicked) != -1 && operand == '') {
            num1 += clicked; 
            display.textContent = `${num1} ${operand} ${num2}`;
        } else if(opr.indexOf(clicked) != -1 && num1 != '') {
            operand = clicked;
            display.textContent = `${num1} ${operand} ${num2}`;
        } else if(num1 != '' && operand != '' && (numbers.indexOf(clicked) != -1)) {
            num2 += clicked;
            display.textContent = `${num1} ${operand} ${num2}`;
        } else if(num1 != '' && num2 != '' && operand != ''){
            if(clicked == '%') {
            let temp = perc(operand, Number(num1), Number(num2));
            total = total + temp;
            display.textContent = `${total}`;
            num1 = temp;
            num2 = '';
            operand = '';
            } else if(opr.indexOf(clicked) != -1 || clicked == '=') {
            let temp = operate(operand, Number(num1), Number(num2));
            total = total + temp;
            display.textContent = `${total}`;
            num1 = temp;
            num2 = '';
            operand = '';
            } 
        }
    }
};

//grab the buttons and place a for-each loop
buttons.forEach(button => button.addEventListener('click', calculate));



