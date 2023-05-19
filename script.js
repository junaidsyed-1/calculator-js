// console.log("Working")

const calculate = (inputId, buttonClass, buttonHandlers) => {
    let inputString = "";

    const handleButtonClick = (event) => {
        const buttonValue = event.target.innerHTML;
        const buttonHandler = buttonHandlers[buttonValue];
        // console.log(buttonHandlers)
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
    if (string == "") {
        throw new Error("Invalid Input expression : Empty string");
    }
    const operators = ["+", '*', '-'];
    if (operators.includes(string[0])) {
        throw new Error(`Invalid Input expression : can not start with operator ${string[0]}`);
    }

    const numberOperators = string.split("").filter(char => operators.includes(char)).length;
    if (numberOperators == 0) {
        throw new Error("Invalid Input expression : No operators found")
    } else if (numberOperators > 1) {
        throw new Error("Invalid Input expression : Multiple operators found")
    }

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

