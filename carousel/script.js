console.log("Iam here");
(function () {
    var cat = document.querySelectorAll("#carousel img");
    //nested outra funcão que contenha todas o movimento do carousel
    // var firstCat = 0;
    // var secondCat = 1;
    // E usar o setTimeout chama a próxima imagem depois de alguns segundos//
    // setTimeout(movecat, 5000); //seconds apropriado seria 2, mas enquanto esta fazendo a função funcionar melhor deixar 5 sec assim da tempo de todas as propriedades aparecerem pra você ver se esta funcionando.//



    setTimeout(movecat, 5000);

    function movecat() {
        // event delegation
        firstCat = secondCat;
        secondCat++;
        if (secondCat >= cat.length) {
            secondCat = 0;
            }}
        document
            .getElementById("#carousel")
            .addEventListener("transitionend", function (e) {
                if (e.target.classList.contains("dontseethecat")) {
                    e.target.classList.remove("dontseethecat");
                }
            });
    }
}
)

//Store in a Var o que vamos precisar usar. In the DOM
// 1- imagem que está aparecendo na tela
// 2- próxima imagem que vai aparecer na sequencia//

// //Tomar cuidado com os comandos transitionend e não transitioned//
// Vamos precisar chamar um evento para parar a funcão de rodar e esse evento será transitionend

// Quando chamamos um elemento ele esta também chamando o pai e o body deste mesmo elemento
