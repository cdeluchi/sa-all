// para instalar um package usa no terminal npm <o nome do pacote> por exemplo chalk e -s para salvar
// sempre savar depois de abrir um package
// para saber se esta instalado usa = cat package.json por exemplo e ele vai mostrar tudo o que está instalado

const chalk = require("chalk");
const http = require("http");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
    req.on("error", (err) => console.log("err in request:", err));
    res.on("error", (err) => console.log("err in response:", err));

    if (req.method === "GET") {
        res.write(`
            <!doctype html>
            <html>
                <title>Colors</title>
                <form method="POST">
                    <input type="text" name="first" placeholder="first" autocomplete="off">
                    <select name="color">
                        <option value="red">red</option>
                        <option value="blue">blue</option>
                        <option value="green">green</option>
                        <option value="yellow">yellow</option>
                        <option value="gray">gray</option>
                        <option value="magenta">magenta</option>
                        <option value="cyan">cyan</option>
                    </select>
                    <button type="submit">Go</button>
                </form>
            </html>
        `);
        res.end();
    } else if (req.method === "POST") {
        let body = "";

        req.on("data", (chunk) => (body += chunk));
        req.on("end", () => {
            const parsedBody = querystring.parse(body);
            console.log("parsed body:", parsedBody);
            res.setHeader("Content-Type", "text/html");
            res.statusCode = 200;
            res.end(`
                    <title>${parsedBody.text}</title>
                    <a href="/"><p style="color:${parsedBody.color}">Hello ${parsedBody.text}</p></a>
                    `);
        });
    }
});

server.listen(8080, () => console.log("I am listening..."));
// ou podemos escrever assim :

// req.on("data", (chunk) => (body += chunk));
// (chunk) => {
//     return (body += chunk);
// };

// mudar a cor no teminal
// mudar a cor do nome no website
// quando clicar no nome que apareceu ele deve ser um link e voltar pro formulario inicial
