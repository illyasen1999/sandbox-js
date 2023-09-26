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

const daysInWords = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satuday"];
const monthsInWords = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Old Solution
// let updateDateAndTime = () => {
//     seconds = seconds + 1;
//     if(seconds > 59){
//         seconds = 0;
//         minutes = minutes + 1
//     }
//     if(minutes > 59){
//         minutes = 0;
//         hours = hours + 1
//     }
//     if(hours > 23) {
//         hours = 0
//     }
//     console.log(seconds);
//     console.log(`${hours}:${minutes}:${seconds}`)

//     currentTimeEl.textContent = `${hours}:${minutes}:${seconds} AM`
//     currentDateEl.textContent = `${currentDay}, ${currentMonth} ${date}, ${year}`
// }
// setInterval(updateDateAndTime, 1000)

// console.log(`${currentDay}, ${currentMonth} ${date}, ${year}`)
// console.log(`${hours}:${minutes}:${seconds}`)

// New Solutions
// SRC/CREDITS: https://github.com/C-ZLTV/counter-js-basics/tree/master
// let timeRunner = () => {
//     let TM = new Date();
//     let hours = TM.getHours().toString().padStart(2, "0");
//     let minutes = TM.getMinutes().toString().padStart(2, "0");
//     let seconds = TM.getSeconds().toString().padStart(2, "0");
//     return currentTimeEl.innerText = `${hours}:${minutes}:${seconds} AM`
// };

let dateRunner = () => {
    let DT = new Date();
    let date = DT.getDate().toString().padStart(2, "0");
    let day = DT.getDay();
    let month = DT.getMonth();
    let year = DT.getFullYear();
    let currentDay = daysInWords[day];
    let currentMonth = monthsInWords[month];
    return currentDateEl.textContent = `${currentDay}, ${currentMonth} ${date}, ${year}`
};

// SRC/CREDITS: https://flexiple.com/javascript/javascript-clock/

let testClock = () => {
    let TM = new Date();
    let hours = TM.getHours();
    let minutes = TM.getMinutes();
    let seconds = TM.getSeconds();

    let session = "AM";

    if(hours > 12) {
        session = "PM"
    }

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let time = `${hours}:${minutes}:${seconds} ${session}`;
    return currentTimeEl.textContent = time
    // setTimeout(testClock, 1000); // can use recursion
}
setInterval(testClock, 1000);
// setInterval(timeRunner, 1000);
setInterval(dateRunner, 1000);

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

let [
    cardForm,
    cardNameInput,
    cardJobInput,
    cardTwInput,
    cardGhInput,
    cardLiInput,
    cardWebsiteInput,
    cardSubmitBtn,
    cardOutputBox,
    cardInfo,
  ] = [
    document.querySelector(".card-form"),
    document.querySelector(".card-name"),
    document.querySelector(".card-job"),
    document.querySelector(".card-twitter"),
    document.querySelector(".card-github"),
    document.querySelector(".card-linkedin"),
    document.querySelector(".card-website"),
    document.querySelector(".card-submit"),
    document.querySelector(".inner-box-2"),
    {},
  ];
  
  let cardStructure = ``;
  
  let submitCardForm = (e) => {
    e.preventDefault();
    let [twHandle, ghHandle, liHandle] = [cardTwInput.value, cardGhInput.value, cardLiInput.value];
  
    cardInfo = {
      myName: cardNameInput.value,
      myJob: cardJobInput.value,
      mySocials: [
        `https://twitter.com/${twHandle}`,
        `https://github.com/${ghHandle}`,
        `https://linkedin.com/${liHandle}`,
      ],
      myWebsite: cardWebsiteInput.value,
    };
  
    cardStructure = `
    <div class="glass-card">
        <img src="/img/gigachad8bit.jpg" alt="profile-img" class="profile-img" />

        <h4 class="person-name">Name: ${cardInfo.myName}</h4>

        <p class="job">Job: ${cardInfo.myJob}</p>

        <ul class="socials">
            <li class="sc-item"><a href="${cardInfo.mySocials[0]}" class="sc-link twitter" target="_blank"><i class="fa-brands fa-twitter"></i> Tw</a></li>
            <li class="sc-item"><a href="${cardInfo.mySocials[1]}" class="sc-link github" target="_blank"><i class="fa-brands fa-github"></i> Gh</a></li>
            <li class="sc-item"><a href="${cardInfo.mySocials[2]}" class="sc-link linkedin" target="_blank"><i class="fa-brands fa-linkedin"></i> Li</a></li>
        </ul>

        <a href="${cardInfo.myWebsite}" class="website"><i class="fa-solid fa-link"></i> ${cardInfo.myName}'s Website</a>
    </div>
    `;
  
    cardOutputBox.innerHTML = cardStructure;
  
    cardForm.reset();
    console.log(cardInfo);
  };

  cardSubmitBtn.addEventListener("click", submitCardForm);
  

let rand = () => {
    return Math.floor(Math.random() * 100 + 1);
}

// Async Await + fetch
let getPokemonBtn = document.querySelector(".get-pokemon");
let pokemonImg = document.querySelector(".pokemon-img");
let pokemonCaption = document.querySelector(".pokemon-name");

console.log(pokemonImg);
console.log(pokemonCaption);

getPokemonBtn.addEventListener("click", getData);

async function getData() {
    try {
        let pokemonAPI = `https://pokeapi.co/api/v2/pokemon/${rand()}/`
        let res = await fetch(pokemonAPI)
        let data = await res.json();
        let { sprites: { front_default }, name } = data;
        pokemonImg.setAttribute("src", front_default);
        pokemonImg.style.backgroundColor = "#ffffff";
        pokemonCaption.textContent = capTextFunc(name);
        // console.log(data);
        console.log(`${capTextFunc(name)}: ${front_default}`);
    }
    catch (err) {
        console.error(err);
    }
}

// Promise + XMLHttpRequest (this can also be achieved with fetch)
let promisePokemonBtn = document.querySelector(".promise-pokemon");
let promisePokemonImg = document.querySelector(".pokemon-img-promise");
let promisePokemonCaption = document.querySelector(".pokemon-name-promise");

let getPokemonPromise = () => {
    return new Promise((response, reject) => {
        setTimeout(() => {
            let pokemonAPI2 = `https://pokeapi.co/api/v2/pokemon/${rand()}/`
            let xhr = new XMLHttpRequest;

            // .open() parameters: method, url, async(optional)
            xhr.open("GET", pokemonAPI2, true);

            // .onload() initializes a request
            xhr.onload = () => {
                if(xhr.status == 200){
                    // status 200 pertains to a successful response
                    // then parses the response into a json format
                    let pokemonItems = JSON.parse(xhr.response)
                    response(pokemonItems.name);

                    let { sprites: { front_default }, name } = pokemonItems;
                    promisePokemonImg.setAttribute("src", front_default);
                    promisePokemonImg.style.backgroundColor = "#ffffff";
                    promisePokemonCaption.textContent = capTextFunc(name);
                }
            }

            xhr.onerror = () => {
                reject("Error Occured")
            }

            xhr.send();
        }, 1000);
    })
}

promisePokemonBtn.addEventListener('click', () => {
    getPokemonPromise().then((data) => console.log(data)).catch((err) => console.error(err))
})


let postList = document.querySelector(".post-list");
const posts = [
    { 
        title: 'Post One',
        body: 'This is post one.'
    },
    { 
        title: 'Post Two',
        body: 'This is post two.'
    },
]

// Callbacks
// let getPosts = () => {
//     setTimeout(() => {
//         let output = ''
//         posts.forEach((post, index) => {
//             output += `
//             <lia class="post-item">
//                 <h3 class="post-title">Title ${index + 1}: <span class="post-title-item">${post.title}</span></h3>
//                 <p class="post-body">${post.body}</p>
//             </lia>
//             `
//         });
//         postList.innerHTML = output;
//     }, 1000)
// }

// // Integrate callback in the createPost function
// let createPost = (post, callback) => {
//     setTimeout(() => {
//         posts.push(post);
//         // getPosts will be ran after the new post is added
//         callback();
//     }, 2000);
// }

// getPosts();

// This wont work because getPost output already ran
// For this to work use Callbacks
// In this case the new post is added to the posts list then getPosts is ran after so the output will include the third post
// createPost({ title: "Post Three", body: "This is post three." }, getPosts);

// Promises
let getPosts = () => {
    setTimeout(() => {
        let output = ''
        posts.forEach((post, index) => {
            output += `
            <li class="post-item">
                <h3 class="post-title">Title ${index + 1}: <span class="post-title-item">${post.title}</span></h3>
                <p class="post-body">${post.body}</p>
            </li>
            `
        });
        postList.innerHTML = output;
    }, 1000)
}

let createPost = (post) => {
    // Promise takes in Resolve and Reject
    return new Promise((res, rej) => {
        setTimeout(() => {
            posts.push(post);

            // Add some type of error checking
            const err = false;

            if(!err){
                res()
            }
            else {
                rej("Error")
            }

        }, 2000);
    })
}

// If resolved, add .then() to add operations also add a .catch() to catch any errors
// createPost({ title: "Post Three", body: "This is post three." })
// .then(getPosts).catch((err) => console.error(err))

// Promise.all()

// const prom1 = Promise.resolve("Promise 1 resolved");
// const prom2 = 10;
// const prom3 = new Promise((res, rej) => {
//     setTimeout(res, 2000, "Promise 3 resolved")
// })
// // fetch() returns a promise and has to use 2 .then(): 1st .then() converts data into JSON and 2nd .then() you can grab the data and use it
// const prom4 = fetch(`https://pokeapi.co/api/v2/pokemon/${rand()}/`)
// .then((res) => res.json())
// .then((pokemon) => pokemon.name.toUpperCase())

// // Promise.all takes in an array of promises
// Promise.all([prom1, prom2, prom3, prom4])
// .then((val) => console.log(val))

// Async/Await
// async runs in the background waiting(await) for the inner code to be done processing
// Async/Await usually is paired with the fetch() rather then using the .then()
let init = async () => {
    // also use a try/catch error handling to catch potential errors if something fails
    try {
        await createPost({ title: "Post Three", body: "This is post three." });
        getPosts();
    }
    catch(err){
        console.error(err)
    }
}
init();

// XMLHttpRequest - old way of doing http requests
function requestPokemon() {
    return new Promise((res, rej) => {
        let pokemonAPI2 = `https://pokeapi.co/api/v2/pokemon/${rand()}/`
        let xhr = new XMLHttpRequest;

        // .open() parameters: method, url, async(optional)
        xhr.open("GET", pokemonAPI2, true);

        // .onload() initializes a request
        xhr.onload = () => {
            if(xhr.status == 200){
                // status 200 pertains to a successful response
                // then parses the response into a json format
                let pokemonItems = JSON.parse(xhr.response)
                res(pokemonItems.name);
            }
        }

        xhr.onerror = () => {
            rej("Error Occured")
        }

        xhr.send();

    });
}

// requestPokemon().then((data) => console.log(`XHR: ${data}`)).catch((err) => console.error(err))

// fetch() new way of doing http requests
async function fetchPokemon(){
    try{
        // requesting data from an api GET is the default request
        let pokemonAPI3 = await fetch(`https://pokeapi.co/api/v2/pokemon/${rand()}/`);
        
        // if for some reason the request fails(response code 400+/500+) log an warning/error
        if(!pokemonAPI3.ok){
            console.warn("Failed response")
            throw new Error("Error: Failed to response")
        }
        let pokemonData = await pokemonAPI3.json();
        return pokemonData.name;
    }
    catch(err) {
        return err
    }
}

// fetchPokemon().then((data) => console.log(`Data from fetch: ${data}`)).catch((err) => console.error(err));

// Default function parameters
let getPersonInfo = (name, age = 18) => {
    return `Hello im ${name} and im ${age}y/o`
}

let personOne = getPersonInfo("Illy", 100);
console.log(`%c ${personOne}`, 'color: yellow');

let blockScope = () => {
    for(let i = 0; i < 5; i++){
        // let - a variable that is scope blocked and cant be re-assigned outside of its scope
        let count = i;

        // var -  a variable that is not scope blocked and can be re-assigned outside of its scope
        var count2 = i;
    }
    // this doesnt work since it cant access count
    // console.log(count)
    // this works since its not scope blocked
    console.log(count2);
}

// const - variables that dont change/cant be re-assigned
const PIE = 3.14;

// ...spread operator - appending an old list to a new list
let listNumOne = [1,2,3];
let listNumTwo = [4,5,6, ...listNumOne];

// Array Destructuring - placing values of a list into variables based on indexes
let [a, b, c] = listNumOne;
console.log(a);
console.log(b);
// Setting a default value to the variable
console.log(c != undefined ? c : 0);

// Object Destructuring - extracting variables from an object into individual variables
let { age, gender, address: {houseNumber}, address: {city} } = personInfo;

console.log(`Age: ${age}, Gender: ${gender}, House Number: ${houseNumber}, City: ${city}`);

// Deeply nested object
let {nestObj:{ nestOne: { nestTwo }}} = personInfo;

console.log(nestTwo);

// Template literals - replacing a string with a variable that is placed inside this -> ${variable}
console.log(`New List: ${listNumTwo}`);

// ES6 Modules Import/Export - import and export separate code from files using import and export
// for this to work you need to change the html/js src script to a module
import { mInfo } from "./millie-info.js";

// Array Method: forEach - loop through array elements
mInfo.forEach((millie) => {
    console.log(millie);
})

// Simple List Item Generator
let createListItem = (innerSentence) => {
    let li = document.createElement("li");
    li.innerHTML = innerSentence;
    return li;
}

// Common Array Functions: Map, Filter, Reduce, Sort
// Array Method: Map - transforming data from an array returning a new array of data
let mapList = document.querySelector(".map");
mInfo.map((item) => {
    let subsX5 = item.subsPrev * 5;
    mapList.appendChild(createListItem(`Previous Subs x 5: ${item.subsPrev} -> ${subsX5}`));
    console.log(`Map: Subs x 5: ${subsX5}`);
});

// Array Method: Filter - get data based on a filtered condition
let filterList = document.querySelector(".filter");
console.log(filterList)
mInfo.filter((millie) => {
    if(millie.subsPrev < 21000){
        filterList.appendChild(createListItem(`Subs below 21k: ${millie.subsPrev}`));
        console.log(`Filter: Subs ${millie.subsPrev}`);
    }
});

// Array Method: Reduce - reduce all info down to a single output
let reduceOutput = document.querySelector(".reduce")
let currentTotalSubs = mInfo.reduce((total, subs) => (total + subs.subsCur), 0);
reduceOutput.textContent = `All current total subs: ${currentTotalSubs}`
console.log(`All current total subs: ${currentTotalSubs}`);

// Array Method: Sort - sort out values based on a condition
let sortOutput = document.querySelector(".sort");
let sortedCurSubs = mInfo.sort((a, b) => a.subsCur - b.subsCur);
let preTag = document.createElement("pre");
preTag.innerText = JSON.stringify(sortedCurSubs, undefined, 4);
sortOutput.appendChild(preTag)

console.log("Subs Ascending: ");
console.log(sortedCurSubs);