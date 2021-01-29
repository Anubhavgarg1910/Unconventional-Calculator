const defaultResult = 0;
let currentResult = defaultResult; 
let logEntries= [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog (
    operationSpecifier, 
    prevResult, 
    operationNumber, 
    newResult
    ) {
        const logEntry = {
            operation: operationSpecifier,
            prevResult: prevResult,
            number: operationNumber,
            result: newResult
        };
    logEntries.push(logEntry);
    console.log(logEntries);
    }

//     function calculateResult (calculationType) {
//         if (calculationType != "Add"&&
//         calculationType != "Subtract"&&
//         calculationType != "Multiply"&&
//         calculationType != "Divide"
//         ) {
//            return; 
//         }

//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     let mathOperator;
//     if (calculationType === "Add") {
//         currentResult += enteredNumber ;
//         mathOperator = "+" ;
//     } else if (calculationType === "Subtract") {
//         currentResult -= enteredNumber ;
//         mathOperator = "-" ;
//     } else if (calculationType === "Multiply") {
//         currentResult *= enteredNumber ;
//         mathOperator = "*" ;
//     } else if (calculationType === "Divide") {
//         currentResult /= enteredNumber ;
//         mathOperator = "/" ;
//     }
//     createAndWriteOutput(mathOperator, initialResult, enteredNumber);
//     writeToLog(calculationType, initialResult, enteredNumber, currentResult);

//     }
// function add () {
//     calculateResult("Add");
// }

// function subtract () {
//     calculateResult("Subtract");
// }

// function multiply () {
//     calculateResult("Multiply");
// }

// function divide () {
//     calculateResult("Divide");
// }

function calculate(operation) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let operator;
    if(operation === "Add") {
        currentResult += enteredNumber ;
        operator = "+" ;
    } else if(operation === "Subtract") {
        currentResult -= enteredNumber ;
        operator = "-" ;
    } else if(operation === "Multiply") {
        currentResult *= enteredNumber ;
        operator = "*" ;
    } else {
        currentResult /= enteredNumber ;
        operator = "/" ;
    }  
    createAndWriteOutput(operator, initialResult, enteredNumber);
    writeToLog(operation, initialResult, enteredNumber, currentResult);
}


addBtn.addEventListener("click", calculate.bind(this, "Add"));
subtractBtn.addEventListener("click", calculate.bind(this, "Subtract"));
multiplyBtn.addEventListener("click", calculate.bind(this, "Multiply"));
divideBtn.addEventListener("click", calculate.bind(this, "Divide"));