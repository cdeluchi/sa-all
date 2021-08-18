console.log("menu");
var menu = document.querySelector("menu");
var showMenu = document.querySelector(".overlay");
var hideMenu = document.querySelector(".side-nav");
var X = document.getElementsById("closeButton");

showMenu.addEventListener("click", function () {
    menu.classList.add("on");
});

hideMenu.addEventListener("click", function () {
    menu.classList.add("on");
});
