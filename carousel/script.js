console.log("Iam here");
(function () {
    var cat = document.querySelectorAll("#carousel img");
    var current = 0;
    var dot = document.getElementsByClassName("dot");
    var transitioning = false;
    var timer;

    //nested outra funcão que contenha todas o movimento do carousel
    // var firstCat = 0;
    // var secondCat = 1;
    // E usar o setTimeout chama a próxima imagem depois de alguns segundos//
    // setTimeout(movecat, 5000); //seconds apropriado seria 2, mas enquanto esta fazendo a função funcionar melhor deixar 5 sec assim da tempo de todas as propriedades aparecerem pra você ver se esta funcionando.//

    function movecat() {
        transitioning = true;
        cat[current].classList.remove("seethecat");
        dot[current].classList.remove("on");
        cat[current].classList.add("dontseethecat");
        current++;

        if (dokittyIndex != undefined) {
            console.log("dotKittyIndex");
            current = doKittyIndex;
        }
        if (current >= cat.length) {
            current = 0;
        }
        cat[current].classList.add("seethecat");
        dot[current].classList.add("on");

    }
    
    timer = setTimeout(movecat, 5000);
    
    document
    .getElementById("#carousel")
    .addEventListener("transitionend", function (e) {
        if (e.target.classList.contains("dontseethecat")) {
            e.target.classList.remove("dontseethecat");
            transitioning = false;
            timer = setTimeout(movecat, 5000);
        }
    });

    for (var i=0; i < doton.length; i++){
        doton[i].addEventListener("click", function(e){
            var dotonIndex = parseInt(e.target.id);
        })
    }


//Store in a Var o que vamos precisar usar. In the DOM
// 1- imagem que está aparecendo na tela
// 2- próxima imagem que vai aparecer na sequencia//
// event delegation

        // firstCat = secondCat;
        // secondCat++;
        // if (secondCat >= cat.length) {
        //     secondCat = 0;
        //     }

// //Tomar cuidado com os comandos transitionend e não transitioned//
// Vamos precisar chamar um evento para parar a funcão de rodar e esse evento será transitionend

// Quando chamamos um elemento ele esta também chamando o pai e o body deste mesmo elemento

// When a user clicks on a dot, there is two things we want to do:

// Check IF the cats are mid-transition: IF so do nothing, i.e. return 
// Remember we declared a variable called transitioning, which knows whether or not we are mid transition! So all we need to do is check if it is true
// Check IF the dot which was clicked corresponds to the current cat on the screen: IF so do nothing i.e. return
// In the click handler, you can do this by comparing the index of the dot which was clicked, to the index of the current cat on screen
// If you make it past these checks, that means we do want to stop any scheduled upcoming cats ✅, and change their order ✅
// stop upcoming tasks: cancel currently scheduled calls to moveKitties, with the help of clearTimeout, and passing it the value assigned to the timer variable
// trigger new task and pass new current index value: call moveKitties again, and pass it the index of the dot which was clicked
// moveKitties will use this value to determine which cat to move onscreen next
// If no value is passed, the function will simply move on to the next cat as it would have done without any user interaction
