const body = document.querySelector("body");
const initialContent = document.querySelector(".initial-content");
const mainKeycode = document.querySelector(".keycode-info");
const keyCard = document.querySelector(".key-card");
const codeCard = document.querySelector(".code-card");
const whichCard = document.querySelector(".which-card");

document.addEventListener("keydown", (event) => {
   initialContent.style.display = "none";
   //console.log(event);
   let keyNumber = event.which;
   //console.log(keyNumber);
   let whichKey = event.key;
   //console.log(whichKey);
   let keycode = event.code;
   //console.log(keyCode);
   //console.log(keyNumber);
   mainKeycode.textContent = `${keyNumber}`;
   keyCard.textContent = `${whichKey}`;
   codeCard.textContent = `${keycode}`;
   whichCard.textContent = `${keyNumber}`;
})

