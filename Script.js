// Preloader
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
    preloader.style.display = "none";
})

const mainFrame = document.querySelector(".frame");

let listFrame = mainFrame.querySelector("ul");
let lists = listFrame.querySelectorAll("li");

let btn = mainFrame.querySelector("#input-btn");
let inputField = mainFrame.querySelector(".input-field");

btn.addEventListener("click", function () {
    let inputValue = inputField.value;

    if (inputValue !== "") {
        const element = document.createElement("li");
        element.classList.add("list");

        element.innerHTML += `
        <span>${inputValue}</span>
        <button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.16937 15.5801C8.97937 15.5801 8.78938 15.5101 8.63938 15.3601C8.34938 15.0701 8.34938 14.5901 8.63938 14.3001L14.2994 8.64011C14.5894 8.35011 15.0694 8.35011 15.3594 8.64011C15.6494 8.93011 15.6494 9.41011 15.3594 9.70011L9.69937 15.3601C9.55937 15.5101 9.35937 15.5801 9.16937 15.5801Z" fill="#F84A4A"/>
                <path d="M14.8294 15.5801C14.6394 15.5801 14.4494 15.5101 14.2994 15.3601L8.63938 9.70011C8.34938 9.41011 8.34938 8.93011 8.63938 8.64011C8.92937 8.35011 9.40937 8.35011 9.69937 8.64011L15.3594 14.3001C15.6494 14.5901 15.6494 15.0701 15.3594 15.3601C15.2094 15.5101 15.0194 15.5801 14.8294 15.5801Z" fill="#F84A4A"/>
                <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="#F84A4A"/>
            </svg>
        </button>`

        const delBtn = element.querySelector(`button`)
        delBtn.addEventListener("click", delNode);

        listFrame.appendChild(element);
        inputField.value = "";
    }
});

function delNode(e) {
    console.log(e.currentTarget);
    listFrame.removeChild(e.currentTarget.parentElement);
}

// function relocate(){
// lists.forEach((value, index) => {
//     let delBtn = value.querySelector("button");

//     console.log("index - " + index)
//     delBtn.addEventListener("click", function () {
//         let listFrame = mainFrame.querySelector("ul");
//         console.log(listFrame.childNodes[index] + " - " + index);
//         listFrame.removeChild(listFrame.childNodes[index]);
//         lists = listFrame.querySelectorAll("li");
//     })
// })
// }

// relocate();