// console.log("menu");
// var menu = document.querySelector(".menu");
// var showMenu = document.querySelector(".overlay");
// var hideMenu = document.querySelector(".side-nav");
// var x = document.getElementById("closeButton");

// menu.addEventListener("click", function () {
//     menu.classList.add("on");
// });
// menu.addEventListener("click", function () {
//     menu.classList.add("hidden");
// });

// var sideBarMenu = document.getElementById("menu");
// sideBarMenu.addEventListener("click", function () {
//     hideMenu.classList.add("on");
//     hideMenu.classList.remove("hidden");
//     showMenu.classList.remove("hidden");
// });
// x.addEventListener("click");
// showMenu.addEventListener("click");

// pop Up hover
// hidding our banner
$(".hoverpopup").hide();
// make the banner apper after 1s
setTimeout(function () {
    console.log("code is runnig after 1s");
    $(".hoverpopup").show();
}, 1000);
$(".x").on("click", function () {
    console.log("click on the x");
    $(".hoverpopup").hide();
});
console.log($(".x"));

console.log($(".hoverpopup"));
