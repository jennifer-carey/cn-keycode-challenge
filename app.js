const body = document.querySelector("body");
const initialContent = document.querySelector(".initial-content");

document.addEventListener("keydown", (event) => {
   initialContent.style.display = "none";
   console.log(event);
   // console.log(event.target);
})

