//Variables
const patty = document.querySelectorAll(".hamburgerPatty");
const hamburger = document.querySelector(".hamburger");
const anchors = document.querySelectorAll("li.nav-item a");
const menu = document.querySelector("div.collapse");

//Functions
const openMenu = () => {
    patty.forEach((element) => {
        element.classList.toggle("open");
    });
};

const anchorClicked = () => {
    openMenu();
    menu.classList.remove("show");
};
//Event listeners
hamburger.addEventListener("click", openMenu);
anchors.forEach((element) => {
    element.addEventListener("click", anchorClicked);
});