const screenInput = document.querySelector(".calc-screen .input")
const screenCalc = document.querySelector(".calc-screen .current-calc")

// Update calaculation
const updateCalculation = () => {

}

// Calculate
const operate = () => {
    // do caculation
    // constrict SF 
}

// Convert to decimal
const decimal = () => {

}

// Check the operation
const operatorPress = (id) => {
    // check operator is dec or ac
    if (id === "AC") {
        screenInput.textContent = ""
        screenCalc.textContent = ""
    }
    // check if there is an operator active already
        // replace
    // check if there is an operator in calculation already 
        // operate then add clicked operation
}

// On button press
const btnPress = (e) => {
    // if equals
    if (e.id === "eql"){
        operate()
    }
    // if number
    else if (e.className === "num"){
        screenInput.textContent += e.id[3]
    }
    // if operator
    else if (e.className === "op") {
        operatorPress(e.id)
    }
}

const btns = document.querySelectorAll("button")
btns.forEach(btn => {
    btn.addEventListener("click", e => btnPress(e.target))
})