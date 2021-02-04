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
   mainKeycode.textContent = `${keyNumber}`;
   keyCard.innerHTML = `event.key<br> ${whichKey}`;
   codeCard.innerHTML = `event.code<br> ${keycode}`;
   whichCard.innerHTML = `event.which<br> ${keyNumber}`;
})

