// console.log("menu");
var menu = document.querySelector(".menu");
var showMenu = document.querySelector(".overlay");
var hideMenu = document.querySelector(".side-nav");
var x = document.getElementById("closeButton");

menu.addEventListener("click", function () {
    menu.classList.add("on");
});
menu.addEventListener("click", function () {
    menu.classList.add("hidden");
});

var sideBarMenu = document.getElementsById("menu");
sideBarMenu.addEventListener("click", function () {
    hideMenu.classList.add("on");
    hideMenu.classList.remove("hidden");
    showMenu.classList.remove("hidden");
});
x.addEventListener("click");
showMenu.addEventListener("click");
