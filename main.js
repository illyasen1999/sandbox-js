// 🟢 Documentation: https://developer.mozilla.org/en-US/

// Text Box Sample
let inputBox = document.querySelector(".input-box");
let inputText = document.getElementById("input-text");
let button = document.querySelector(".send-button");
let output = document.querySelector(".output");

let num = 0;

let capTextFunc = (text) => `${text.charAt(0).toUpperCase()}${text.slice(1, text.length)}`

const getText = (e) => {
    e.preventDefault();
    let inputValue = inputText.value;
    // inputValue = `${inputValue.charAt(0).toUpperCase()}${inputValue.slice(1, inputValue.length)}`
    output.innerHTML = capTextFunc(inputValue);
    output.style.fontWeight = 600
    output.style.color = "magenta"
    inputBox.reset();
    num++;
    console.log(capTextFunc(inputValue))
    console.log(num);
}


button.addEventListener("click", getText);

// 🟡 Refactor to only 1 unique name
// document.querySelector('[name=input]').addEventListener('keyup', (e) => {
//     if(e.key == "Enter"){
//         getText;
//     }
// });


// Testing for capitalization
let testName = "Test Name";

// let capName = `${myName.charAt(0).toUpperCase()}${myName.slice(1, myName.length)}`

console.log(`Capitalized: ${capTextFunc(testName)}`);

// Random Number Generator
let randNumOutput = document.querySelector(".rand-num-output");
let challengeOutputBox = document.querySelector(".tm-op-challenge");
let randBtn = document.querySelector(".rand-btn");

function allDifAnswers() {
    let randX = Math.floor(Math.random() * 100 + 1);
    let randY = Math.floor(Math.random() * 100 + 1);
    let res;
    
    // Addition
    res = randX + randY;
    console.log(`Addition: ${randX} + ${randY} = ${res}`);

    // Subtraction
    res = randX - randY;
    console.log(`Subtraction: ${randX} - ${randY} = ${res}`);

    // Multiplication
    res = randX * randY;
    console.log(`Multiplication: ${randX} * ${randY} = ${res}`);

    // Division
    res = randX / randY;
    console.log(`Division: ${randX} / ${randY} = ${res}`);

    // Remainder
    res = randX % randY;
    console.log(`Remainder: ${randX} % ${randY} = ${res}`);
}

// TODO: Make answers into HTML Elements and place them in the site
// let OperationsChallengeOutput = () => {
//     let challengeOutput
// }

randBtn.addEventListener("click", () => {
    let rand = Math.floor(Math.random() * 10 + 1);
    randNumOutput.style.fontWeight = 600
    randNumOutput.style.color = "magenta"
    randNumOutput.textContent = rand;

    console.log(`Random Number: ${rand}`);
    console.log("------------------------------");
    allDifAnswers()
});

// Display Date and Time | Check MDN for Date and Time Documentation
// TODO: Make the date and time update in real time
let currentTimeEl = document.querySelector(".time-el");
let currentDateEl = document.querySelector(".date-el");
let dt = new Date();
const daysInWords = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satuday"];
const monthsInWords = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let date = dt.getDate();
let time = dt.getTime();
let day = dt.getDay();
let month = dt.getMonth();
let hours = dt.getHours();
let minutes = dt.getMinutes();
let seconds = dt.getSeconds();
let year = dt.getFullYear();
let currentDay = daysInWords[day];
let currentMonth = monthsInWords[month];

let updateDateAndTime = () => {
    // TODO: Try to make numbers be in 00 format
    seconds = seconds + 1;
    if(seconds > 59){
        seconds = 0;
        minutes = minutes + 1
    }
    if(minutes > 59){
        minutes = 0;
        hours = hours + 1
    }
    if(hours > 23) {
        hours = 0
    }
    // console.log(seconds);
    // console.log(`${hours}:${minutes}:${seconds}`)

    currentTimeEl.textContent = `${hours}:${minutes}:${seconds} AM`
    currentDateEl.textContent = `${currentDay}, ${currentMonth} ${date}, ${year}`
}
setInterval(updateDateAndTime, 1000)

console.log(`${currentDay}, ${currentMonth} ${date}, ${year}`)
// console.log(`${hours}:${minutes}:${seconds}`)

// https://flexiple.com/javascript/javascript-clock/
// setInterval vs setTimeout

// let testClock = () => {
//     let session = "AM";

//     if(hours > 12) {
//         session = "PM"
//     }

//     hours = (hours < 10) ? "0" + hours : hours;
//     minutes = (minutes < 10) ? "0" + minutes : minutes;
//     seconds = (seconds < 10) ? "0" + seconds : seconds;

//     let time = `${hours}:${minutes}:${seconds} ${session}`;
//     console.log(time);
//     let t = setTimeout(testClock, 1000);
// }

// testClock();

// Array
let arrayForm = document.querySelector(".array-form")
let arrayInput = document.getElementById("array-value");
let addArrayValueButton = document.querySelector(".add-array-value");
let removeArrayItemsButton = document.querySelector(".remove-items");
let arrayOutput = document.querySelector(".array-list");
let arrayLengthIndicator = document.querySelector(".length");
let arrayOutputList = [];

arrayLengthIndicator.innerHTML = arrayOutputList.length;

let getInputValue = (e) => {
    e.preventDefault();
    let inputValue = arrayInput.value;
    let arrayValueStructure;
    console.log(inputValue);
    
    
    let li = document.createElement("li");
    li.setAttribute("class", "array-item");
    arrayOutputList.push(inputValue);
    // arrayOutputList.reverse();
    let arrayLengthValue = arrayOutputList.length;


    // Dunno why 😅
    // arrayOutputList.forEach((listInput) => {
    //     let index = arrayOutputList.indexOf(listInput);
    //     arrayValueStructure = `${index}: ${capTextFunc(listInput)}`;
    //     li.innerHTML = arrayValueStructure;
    //     arrayOutput.appendChild(li);
    //     arrayLengthIndicator.innerHTML = arrayLengthValue;
    // })

    let index = arrayOutputList.indexOf(inputValue);
    arrayValueStructure = `${index}: ${capTextFunc(inputValue)}`;
    li.innerHTML = arrayValueStructure;
    arrayOutput.appendChild(li);
    arrayLengthIndicator.innerHTML = arrayLengthValue;

    console.log(arrayOutputList);
    // console.log(arrayOutputList.shift());
    arrayForm.reset();
}

addArrayValueButton.addEventListener("click", getInputValue);

let removeListItems = () => {
    arrayOutput.innerHTML = "";
    console.log("List Items Removed.");
}

let removeItems = () => {
    if(arrayOutputList < 1) {
        console.log("No items to be removed");
    }
    arrayOutputList.forEach(() => {
        arrayOutputList.splice(0, arrayOutputList.length);
        removeListItems();
        console.log(arrayOutputList);
        console.log("Removed Items.");
    });

    arrayLengthIndicator.innerHTML = arrayOutputList.length;
}

removeArrayItemsButton.addEventListener("click", removeItems);

// TODO: Create a Glassmorphism Profile Card Generator using objects. Check /img for idea illustration. Get idea from https://github.com/illyasen1999/Illyasen-Periodic-Table

let personInfo = {
    myName: "Illyasen",
    age: 99,
    gender: "X86-64",
    canCode: true,
    languages: ["HTML", "CSS", "Javascript"],
    address: {
        houseNumber: "#999",
        city: "Javascript",
        nation: "Vanilla Javascript"
    },
    introduce: () => {
        console.log(`Hello im ${personInfo.myName}`)
    },
    nestObj: {
        nestOne: {
            nestTwo: "Two level nesting?"
        }
    }
}

let myProgrammingLanguages = () => {
    personInfo.languages.forEach((language, key) => {
        console.log(`${key + 1}: ${language}`);
    })
}

myProgrammingLanguages(); // prints out programming languages

personInfo.introduce();

personInfo.myName = "Illy";

personInfo.introduce();

personInfo.address.houseNumber = "#991"

let { age, gender, address: {houseNumber}, address: {city} } = personInfo;

console.log(`Age: ${age}, Gender: ${gender}, House Number: ${houseNumber}, City: ${city}`);

let {nestObj:{ nestOne: { nestTwo }}} = personInfo;

console.log(nestTwo);