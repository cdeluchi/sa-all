console.log("menu");
var showMenu = document.querySelector(".overlay");
var hideMenu = document.querySelector(".side-nav");
var X = document.getElementsById("closeButton");

function sideMenu() {
    showMenu.addEventListener("click", function () {
        menu.classList.add("on");
    });

    hideMenu.addEventListener("click", function () {
        menu.classList.remove("hidden");
    });
}

var sideBarMenu = document.getElementsById("menu");
sideBarMenu.addEventListener("click", function () {
    sideNav.classList.add("on");
    sideNav.classList.remove("hidden");
    overlay.classList.remove("hidden");
});
X.addEventListener("click");
overlay.addEventListener("click");
