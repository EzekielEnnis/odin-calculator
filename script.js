const screenInput = document.querySelector(".calc-screen .input")
const screenCalc = document.querySelector(".calc-screen .current-calc")

/*
TODO - cant click operation if theres no number input
TODO - rework update Calculation so it works after one operation is completed
TODO - finish decimal funtion 
TODO - check if operation is already active and calcualte before appplying
*/

const opIds = {
    "add": "+",
    "sub": "-",
    "mul": "x",
    "div": "/"
}

// Stores operator before number is pressed
let opStore = ""


// Update calaculation
const updateCalculation = (content) => {
    screenCalc.textContent = `${screenInput.textContent} ${content}`
    screenInput.textContent = ""
    opStore = ""
}

// Calculate
const operate = () => {
    // do caculation
    let num1 = +screenCalc.textContent.split(" ")[0]
    let op = screenCalc.textContent.split(" ")[1]
    let num2 = +screenInput.textContent
    let result

    switch(op) {
        case ("+"): result = num1 + num2; break;
        case ("-"): result = num1 - num2; break;
        case ("x"): result = num1 * num2; break;
        case ("/"): result = num1 / num2; break;
        default: "MATHERROR"
    }
    // constrict SF 
    if (result.length > 10) result.toPrecision(9)
    screenCalc.textContent = result
    screenInput.textContent = ""
}

// Convert to decimal
const decimal = () => {

}

// Check the operation
const operatorPress = (id) => {
    const operators = ["=", "-", "x", "/"]
    // check operator is dec or ac
    if (id === "AC") {
        screenInput.textContent = ""
        screenCalc.textContent = "|"
        return
    }
    else if (id === "dec") {
        decimal()
        return
    }

    // check if there is an operator in calculation already 
    // operate then add clicked operation
    opStore = id
    console.log(opStore)
}

// On button press
const btnPress = (e) => {
    // if equals
    if (e.id === "eql"){
        operate()
    }
    // if number
    else if (e.className === "num"){
        if (opStore != "") updateCalculation(opIds[opStore]);
        screenInput.textContent += e.id[3]
    }
    // if operator
    else if (e.className === "op") {
        operatorPress(e.id)
    }
    else screenInput.textContent = "ERROR"
}

const btns = document.querySelectorAll("button")
btns.forEach(btn => {
    btn.addEventListener("click", e => btnPress(e.target))
})