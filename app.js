const body = document.querySelector("body");
const initialContent = document.querySelector(".initial-content");

document.addEventListener("keydown", (event) => {
   initialContent.style.display = "none";
   //console.log(event);
   let keyNumber = event.which;
   console.log(keyNumber);
   let whichKey = event.key;
   console.log(whichKey);
   let keyCode = event.code;
   console.log(keyCode);
   console.log(keyNumber);

})

