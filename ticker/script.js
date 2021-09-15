// precisamos adicionar ao ticker já existente o $.ajax. Usamos a mesmo função que já existia antes e tranformamos ela toda em jQuery.
//  1- dentro da primeira função inserimos o $.ajax que também é uma função e que vai receber as informações do .json
// usamos os Var que ja existiam e criamos um novo para conter as informações do html. por isso precisa estar vazio

// para alterar todo o código de Javascript para jQuery, precisamos saber os comandos que o jQuery tem.
// quando for buscar um elemento pe. getElementById no jQuery será $(#elementdodiv)

(function () {
    var jqHeadlines = $("#headlines");
    var html = "";

    //  $.ajax
    // no $.ajax o que deve conter é todas as informações que estavam no html
    // chamamos primeiro o method: "GET" que é quando você está absorvendo informações de algum lugar.
    // depois a url: que é de qual lugar você está fazendo esta busca, neste caso no arquivo .json que criamos com todas as urls que serão apresentadas no browser
    //na função success: é onde o seu código oficialmente está rodando, e se estiver tudo ok, ele vai aparecer no seu console.log perfeitinho.
    // depois de feito isso e tudo estar rodando perfeitinho,  é hora de faze rum loop por todos as suas urls. que aqui estamos chamando de (data)
    // html += se refere a var vazia que fizemos lá em cima ele vai resultar ao html que precisamos concatenar em uma linha logo na sequencia.
    // quando terminamos chamaos a função html() e a função que ja estava rodando nosso codigo anteriormente que é moveHeadlines()

    $.ajax({
        method: "GET",
        url: "data-server.json",
        success: function (arrayOfHeadlines) {
            console.log(arrayOfHeadlines);
            for (var i = 0; i < arrayOfHeadlines.length; i++) {
                html +=
                    "<a href='" +
                    arrayOfHeadlines[i].url +
                    "'>" +
                    arrayOfHeadlines[i].text +
                    "</a>";
            }

            jqHeadlines.html(html);
            moveHeadlines();
        },
    });

    // quando a função rodar precisamos criar e var diferentes. 1 será referente ao nosso elemente <a> que continha todos as nossas urls no html
    //  usamos o Math.floor para dar um numero aleatório para o loop que está rodando.

    function moveHeadlines() {
        var jqA = $("a");
        var jqLeft = Math.floor(jqHeadlines.offset().left);
        var stopRun;

        function moveHeadlines() {
            jqLeft--;
            if (-jqLeft === $(jqA.eq(0)).outerWidth()) {
                $(jqHeadlines).append(jqA.eq(0));
                jqA = $("a");
                jqLeft = 0;
            }
            jqHeadlines.css({ left: jqLeft + "px" });
            stopRun = requestAnimationFrame(moveHeadlines);
        }
        moveHeadlines();

        function stopHeadlines(stopRun) {
            window.cancelAnimationFrame(stopRun);
        }
        for (var i = 0; i < jqA.length; i++) {
            jqA.eq(i).on("mouseenter", function () {
                $(this).addClass("hover");
                stopHeadlines(stopRun);
            });
            jqA.eq(i).on("mouseleave", function () {
                $(this).removeClass("hover");
                moveHeadlines();
            });
        }
    }
})();

// (function () {
//     var jqHeadlines = $("headlines");
//     var html = "";
//     $.ajax({
//         method: "GET",
//         url: "data.json",
//         success: function (arrayOfHeadlines) {
//             console.log(arrayOfHeadlines);
//             for (var i = 0; i < arrayOfHeadlines.length; i++) {
//                 html +=
//                     "<a href='" +
//                     arrayOfHeadlines[i].url +
//                     "'>" +
//                     arrayOfHeadlines[i].text +
//                     "</a>";
//                 console.log("body");
//             }
//             jqHeadlines.html(html);
//             moveHeadlines();
//         },
//     });
//     var jqA = $("a");
//     var jqLeft = Math.floor(jqHeadlines.offset().left);
//     var stopRun;

//     function moveHeadlines() {
//         jqLeft--;
//         if (-jqLeft === $(jqA.eq(0)).outerWidth()) {
//             $(jqHeadlines).append(jqA.eq(0));
//             jqA = $("a");
//             jqLeft = 0;
//         }
//         jqHeadlines.css({ left: jqLeft + "px" });
//         stopRun = requestAnimationFrame(moveHeadlines);
//     }
//     moveHeadlines();
//     console.log(moveHeadlines);

//     function stopHeadlines(stopRun) {
//         window.cancelAnimationFrame(stopRun);
//     }
//     console.log(stopHeadlines);

//     for (var i = 0; i < jqA.length; i++) {
//         jqA.eq(i).on("mouseenter", function () {
//             $(this).addClass("hover");
//             stopHeadlines(stopRun);
//         });
//         jqA.eq(i).on("mouseleave", function () {
//             $(this).removeClass("hover");
//             moveHeadlines();
//         });
//     }
// })();

// (function () {
//     // var headlines = document.getElementById("headlines"); Vanilla JS
//     var jQHeadlines = $("#headlines"); //jQuery
//     // var left = headlines.offsetLeft; Vanilla JS
//     var jQLeft = $("#headlines");

//     /* function moveHeadlines() {
//         left--;
//         setTimeout(moveHeadlines, 16.666);
//     }
//     moveHeadlines(); */

//     function moveHeadlines() {
//         left--;
//         if (left <= -a[0].offsetWidth) {
//             left += a[0].offsetWidth;
//             headlines.appendChild(a[0]);
//         }
//         $("#headlines").style.left = `${left}px`;
//         console.log(left);
//         requestAnimationFrame(moveHeadlines);
//     }
//     moveHeadlines();
// })();
