const https = require("https");
const { consumerKey, consumerSecret } = require("./secrets");

//  ***** very important **** //
// sempre temos que colocar o arquivo .json no gitignore por que ali estará todos os nossos dados importantes, como dados de cartão de crédito, chaves de api etc..

//  sobre Api do twitter. primeiro precisamos criar uma chave que o Twitter disponibiliza e teremos que usar esse código toda vez que formos precisar desses dados
// para configurar essa chave precisamos desses 2 arquivos .js um é o index.js que vai ter a função que receberá todas as informações do Twitter
//  e neste outro o twitter.js terá as funções em si.
// primeiro temos o module para criar o token do twitter.
// neste modulo precisamos de uma função com uma callback function que ela retardará a funções principal de rodar.
//  dentro dela terão mais 2 outras funçnões esta segunda vai verificar se todos os dados que recebemos do token do twitter está correto, por isso ela precisa rodar depois
//  esta terceira função vai pegar os 'pedaços' do token que geramos primeiro e vai armazendar esses dados na array vazia que criamos antes.
// nesta última callback ela precisa receber o argumento null na função e ela vai estar alinhada com a função do index.js que também terá um paramentro como erro, este erro vai ser verificado antes de qualqeur outra coisa, caso tenha o erro já sabemos como resolver.

module.exports.getToken = function (callback) {
    let creds = `${consumerKey}:${consumerSecret}`;
    let encodedCreds = new Buffer.from(creds).toString("base64");
    // buffer 'base64' vao codificar nosso token vao trazer numeros binários como códigos dificil de acessar
    // nesse objeto vamos armazenar todas as informações que o token precisa. qual é o site, o caminha que ele esta seguindo,
    // metodo nesse caso é o post por que estamos solicitando as informações do twitter. ou seja estamos mandando um requerimento
    // headers será a autorização para uso e o tipo de conteúdo. que estamos usando do let encodedCreds que contem todas as informações do buffer e
    //  resultado dos 2 argumentos que passamos antes que é a chave e a password que nesse caso está sendo buscada no secrets.json que passamos antes

    const options = {
        host: "api.twitter.com",
        path: "/oauth2/token",
        method: "POST",
        headers: {
            Authorization: `Basic ${encodedCreds}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };
    const req = https.request(options, cb);
    req.end("grant_type=client_credentials");
    function cb(resp) {
        if (resp.statusCode != 200) {
            callback(resp.statusCode);
            return;
        }

        // aqui criamos o body com a array vazia para armazenar todos os dados que o token teceber

        let body = "";
        resp.on("data", (chunk) => {
            body += chunk;
        }).on("end", () => {
            console.log("body in twitter.js: ", body);
            let parsedBody = JSON.parse(body);
            console.log("parsedBody: ", parsedBody);
            callback(null, parsedBody.access_token);
        });
    }
};

// nesta proxima função vai ser quase a mesma coisa só que a diferença é que estamos GET e nao POST
//  estamos esperando as informações que neste ponto já temos permição do twitter para acessar.
// nosso objeto também será diferente, aqui vamos ter os dados para acessar os twitter como o metodo GET,
// o path também é para receber, e aqui não precisamos mais da autorização acess.token somente o bearerToken

module.exports.getTweets = function (bearerToken, callback) {
    const options = {
        method: "GET",
        host: "api.twitter.com",
        path: "/1.1/statuses/user_timeline.json?screen_name=nytimes&tweet_mode=extended",
        screen_name: "Twitter",
        headers: {
            Authorization: `Bearer ${bearerToken}`,
        },
    };
    // esta parte é basicamente igual com o statuscode 200
    const req = https.request(options, cb);
    req.end();
    function cb(resp) {
        if (resp.statusCode != 200) {
            callback(resp.statusCode);
            return;
        }
        // o body continua vazio para receber os dados parcionados que o twitter vaimandar
        let body = "";
        resp.on("data", (chunk) => {
            body += chunk;
        }).on("end", () => {
            let parsedBody = JSON.parse(body);
            callback(null, parsedBody);
        });
    }
};
// nesta funçnao nao precisamos de uma callback function por que aqui só estamos enviando os dados para a página que criamos antes
// criamos uma nova variavel para conter todos os dados. lembrando que esse arquivo est´å lincado com o ticker que criamos antes, então tudo o que
// colocarmos aqui vai aparecer naquela página
// criamos então um loop que vai passear por todos os twitters fornecidos e procurar exametente o que precisamos que é um twitter com uma única url e que tenha um texto
// criamos outra variavel agora com um objeto vazio que vai receber essas infomaçnoe sda url e o texto
//  precisamos dizer pro loop que se os twitters que ele encontrar for igual a 1, então ele envia isso pro objeto que esta vazio e esperando essa informação
// esse objeto vazio agora precisa falar o que ele quer, então fazemos o twitter[i].full_text e o twitter[i].entities.urls[0].url que seja enviado para o obj vazio
// isso será enviado por que criamos a funcão .push pra dentro desse objeto formatedTwitter
//  e no final return a array vazia que agora contem todas as informaões encontradas

module.exports.filterTweets = function (twitter) {
    let twitterData = [];
    for (let i = 0; i < twitter.length; i++) {
        const formatedTweet = {};
        if (twitter[i].entities.urls.length === 1) {
            console.log("tweets meet condition");
            // console.log(twitter[i].full_text);
            formatedTweet.text = twitter[i].full_text;
            formatedTweet.url = twitter[i].entities.urls[0].url;
            // console.log(twitter[i].entities.urls[0].url);
            // console.log(formatedTweet);
            twitterData.push(formatedTweet);
        }
    }
    console.log(twitterData);
    return twitterData;
};
