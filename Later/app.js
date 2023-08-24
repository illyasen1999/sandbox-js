// TODO: Make a shoping list that can remove items

let addItemButton = document.querySelector(".add-item");
let itemField = document.getElementById("item-field");
let itemForm = document.querySelector(".item-form")
let shoppingList = document.querySelector(".shopping-list")
let itemStruct = '';
let itemId = 0

addItemButton.addEventListener("click", (e) => {
    e.preventDefault();
    let item = itemField.value;

    itemStruct += `
    <li class="list-item">
        <p>${item}</p><button class="remove">X</button>
    </li>`;
    shoppingList.insertAdjacentHTML("beforebegin", itemStruct);

    itemForm.reset();
    console.log(item);
    console.log('Item Added');
})