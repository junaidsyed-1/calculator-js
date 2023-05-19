// console.log("Working")



// const calculate = (inputId, btnclass,) => {
//     let string = "";

//     const buttons = document.querySelectorAll(btnclass);
//     Array.from(buttons).forEach((button) => {
//         button.addEventListener("click", (event) => {
//             if (event.target.innerHTML == '=') {
//                 string = eval(string);
//                 document.getElementById(inputId).value = string;
//             }
//             else if (event.target.innerHTML == 'A') {
//                 string = "";
//                 document.getElementById(inputId).value = string;
//             }
//             else {
//                 console.log(event.target);
//                 string = string + event.target.innerHTML;
//                 document.getElementById(inputId).value = string;
//             }

//         })
//     })
// }

// calculate('input1', 'button')

const calculate = (inputId, buttonClass, buttonHandlers) => {
    let inputString = "";

    const handleButtonClick = (event) => {
        const buttonValue = event.target.innerHTML;
        const buttonHandler = buttonHandlers[buttonValue];
        console.log(buttonHandlers)
        if (buttonHandler) {
            inputString = buttonHandler(inputString);
            document.getElementById(inputId).value = inputString;
        }
    }

    const buttons = document.querySelectorAll(buttonClass);
    Array.from(buttons).forEach((button) => {
        button.addEventListener('click', handleButtonClick)
    })
};

const addButtonHandler = (inputString) => (string) => {
    return string + inputString;
};

const clearButtonHandler = () => () => {
    return "";
}

const equalButtonHandler = () => (string) => {
    if (string == "") return "";
    try {
        return eval(string);
    } catch (error) {
        console.log("Invalid input expression", error);
        return "";
    }
};

const buttonHandlers = {
    "0": addButtonHandler("0"),
    "1": addButtonHandler("1"),
    "2": addButtonHandler("2"),
    "3": addButtonHandler("3"),
    "4": addButtonHandler("4"),
    "5": addButtonHandler("5"),
    "6": addButtonHandler("6"),
    "7": addButtonHandler("7"),
    "8": addButtonHandler("8"),
    "9": addButtonHandler("9"),
    "+": addButtonHandler("+"),
    "-": addButtonHandler("-"),
    "*": addButtonHandler("*"),
    "/": addButtonHandler("/"),
    "Ac": clearButtonHandler(),
    "=": equalButtonHandler(),
};

calculate("input1", "button", buttonHandlers);

