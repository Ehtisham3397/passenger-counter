// Initializing all variables
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

// Increment Function
function increment(){
    count += 1
    countEl.textContent = count
}

// Save Function
function save() {
    let countStr = count + " - " 
    saveEl.textContent += countStr
    count = 0
    countEl.innerText = count
}