let numBeforeOp = '', numAfterOp = ''
const display = document.querySelector('.calc_display')
const number_button = document.querySelectorAll('.number_button')
const operator_button = document.querySelectorAll('.operator_button')
const buttons = document.querySelectorAll('.buttons')
const equal_button = document.querySelector('#equal_button')
const clear_button = document.querySelector('#clear_button')
let operator = ''
const add = function (a, b) {
    return a + b;
};
const subtract = function (a, b) {
    return a - b;
};
const multiply = function (a, b) {
    return a * b;
};
const divide = function (a, b) {
    return a / b
}
const power = function (a, b) {
    return a ** b;
};

const operate = function (a, b, op) {
    switch (op) {
        case '+':
            return add(a, b)
        case '-':
            return subtract(a, b)
        case '×':
            return multiply(a, b)
        case '÷':
            return divide(a, b)
    }
}
const populateDisplay = function (event) {
    const addContent = event.target.textContent
    display.textContent += addContent
}

number_button.forEach(button =>
    button.addEventListener('click', populateDisplay)
)

const operators = ['+', '-', '×', '÷']
// 将str拆分为3
const splitStrByOperate = function (str) {
    // 找到字符串中实际存在的第一个运算符
    const operatorInString = str.split('').find(item => operators.includes(item))
    if (!operatorInString) {
        // 如果没有运算符，重置变量并返回
        numBeforeOp = str
        numAfterOp = ''
        operator = ''
        return
    }
    const index = str.indexOf(operatorInString)
    operator = operatorInString
    numBeforeOp = str.slice(0, index)
    numAfterOp = str.slice(index + 1)
}

const clickOperate = function (event) {
    splitStrByOperate(display.textContent)
    if (numAfterOp)
        equal()
    const lastChar = display.textContent.slice(-1)
    if (!operators.includes(lastChar)) {
        populateDisplay(event)
    }
}


// const splitStrByOperate = function (str) {
//     let index = 0
//     for (const op of operators) {
//         index = str.indexOf(op)
//         if (index > -1) {
//             operator = op
//             break
//         }
//     }
//     numBeforeOp = str.slice(0, index)
//     numAfterOp = str.slice(index + 1)
//     console.log(numBeforeOp, operator, numAfterOp);
// }

// const clickOperate = function (event) {
//     let index = 0
//      查找是否已经有操作符了
//     for (const op of operators) {
//         if (display.textContent.includes(op)) {
//             index += 1
//         }
//     }
//      没有
//     if (index == 0)
//         populateDisplay(event)
//    
//     if (index == 1) {
//         equal()
//         populateDisplay(event)
//     }
// }
operator_button.forEach(button => button.addEventListener('click', clickOperate))

const equal = function (event) {
    splitStrByOperate(display.textContent)
    if (numAfterOp == 0) {
        alert('dont divide 0')
        clickClear()
        return
    }
    if (numAfterOp && operator) {
        display.textContent = operate(+numBeforeOp, +numAfterOp, operator)
        operator = ''
    }
}

const clickClear = function () {
    operator = ''
    numBeforeOp = 0
    numAfterOp = 0
    display.textContent = 0
}

equal_button.addEventListener('click', equal)
clear_button.addEventListener('click', clickClear)


