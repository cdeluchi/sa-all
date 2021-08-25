console.log("local Storage", $);

(function () {
    localStorage.setItem("text", "");
    console.log(localStorage.getItem("text")); // logs "Failing  to prepare is preparing to fail."
    localStorage.removeItem("text");

    try {
        localStorage.setItem("text", "");
        console.log(localStorage.getItem("text")); // logs "Failing  to prepare is preparing to fail."
        localStorage.removeItem("text");
    } catch (e) {
        console.log("text");
    }
});
