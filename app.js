const initialContent = document.querySelector(".initial-content");
const mainKeycode = document.querySelector(".keycode-info");
const keyCard = document.querySelector("#key-card");
const codeCard = document.querySelector("#code-card");
const whichCard = document.querySelector("#which-card");

document.addEventListener("keydown", (event) => {
   initialContent.style.display = "none";

   mainKeycode.textContent = event.which;
   keyCard.innerHTML = `event.key<br> ${event.key}`;
   codeCard.innerHTML = `event.code<br> ${event.code}`;
   whichCard.innerHTML = `event.which<br> ${event.which}`;
})

