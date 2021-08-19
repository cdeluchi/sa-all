// Eventlistener
// img[0]
// Img[1]
// 1- Store in a. Var o que vamos precisar usar

// (function(){
// //Store in a. Var o que vamos precisar usar. In the DOM
// 1- imagem que está aparecendo na tela
// 2- próxima imagem que vai aparecer na sequencia//

// var kitties = document.querySelectorAll(“#carousel img”);

// //aqui vamos chamar o evento para que a função pare de rodar. *event delegation*//

// Var currentKitty = 0;
// Var nextKitty = 1;

// //nested outra funcão que contenha todas o movimento do carousel
// E usar o setTimeout chama a próxima imagem depois de alguns segundos//

// setTimeout(moveKitties, 5000); //seconds apropriado seria 2, mas enquanto esta fazendo a função funcionar melhor deixar 5 sec assim da tempo de todas as propriedades aparecerem pra você ver se esta funcionando.//

// Function movekitties(){
// event delegation!!!
// currentKitty = nextKitty;
// NextKitty++ //aqui esta chamando o loop para rodar as próximas imagens
// if(nextKitty >+ kitties.length){nextKitty = 0;} //precisa fazer esse loop parar quando não tiver amis imagem, para isso fazer o loop voltar pro 0//
// document
//     .getElementById("carousel")
//     .addEventListener("transitionend", function (e) {
//         if (e.target.classList.contains("exit")) {
//             e.target.classList.remove("exit");
//             // call setTimeout again so another transition happens in 5 seconds
//             setTimeout(moveKitties, 5000);
//         }
//     });

// Deve chamar o setimeout no event delegation logo que encerrar de fazer a função.document.getElementById(“carousel”).addEventListener(“transitionend”, function(e){
// if()…)
// //chama de novo o setTimeout//
// setTimeout(moveKitties, 5000);

// }
// })();

// //Tomar cuidado com os comandos transitionend e não transitioned//
// Vamos precisar chamar um evento para parar a funcão de rodar e esse evento será transitionend

// Quando chamamos um elemento ele esta também chamando o pai e o body deste mesmo elemento
