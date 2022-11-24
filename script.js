// const name = prompt("Hello");
// console.log("Hello");
const menu_btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menu_btn.addEventListener(
  "click",
  () => {
    menu.classList.toggle("show");
  },
  false
);
