const menu_btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
let show = false;

menu_btn.addEventListener(
  "click",
  () => {
    show = !show;
    menu.classList.toggle("show");
    show
      ? (menu_btn.innerHTML = '<span class="close">&times;</span>')
      : (menu_btn.innerHTML = '<img src="./menu.png" />');
  },
  false
);
