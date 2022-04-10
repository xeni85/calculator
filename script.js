//addition 
const add = (a, b) => a + b;

//substraction
const subs = (a, b) => a - b;

//multiplication
const mult = (a, b) => a * b;

//division
const divs = (a, b) => a / b;

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

console.log("this is operacioni " + operate('+', 6, 7));

//grab screen and display numbers clicked
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
console.log(buttons);
let num1 = '';
let num2 = '';
let operand = '';
buttons.forEach(button => button.addEventListener('click', (e) => {
    let clicked = e.target.firstChild.textContent;
    let clickedToNum = Number(clicked);
    let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let opr = ['+', '-', '/', '%', '*'];
    console.log(typeof clickedToNum)

    return (numbers.indexOf(clicked) != -1) && (operand == '') ? (num1 += clicked,display.textContent = `${num1} ${operand} ${num2}`) : opr.indexOf(clicked) != -1 ? (operand = clicked,display.textContent = `${num1} ${operand} ${num2}`) : num1 != '' && operand != '' && (numbers.indexOf(clicked) != -1)? (num2 += clicked,display.textContent = `${num1} ${operand} ${num2}`) : console.log((operate(operand, Number(num1), Number(num2))), display.textContent = `${operate(operand, Number(num1), Number(num2))}`);
                

    // if(display.textContent.length < 30) {
    //     if((opr.indexOf(clicked) != -1) && (num1 != '')) {
    //         console.log(clicked);
    //         operand = clicked;
    //         display.textContent = operand;
    //     }
    //     else if(clickedToNum != NaN) {
    //         // console.log(clicked)
    //             num1 += clickedToNum};
    //             display.textContent = num1;

    //     }
}))



