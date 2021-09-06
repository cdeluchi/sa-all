const http = require("http");
const fs = require("fs");

// createServer(callbackFn) - allows us to create our very own server
// callbackFn(arg1, arg2)
// arg1 - represents the request that is made to the server
// arg2 - represents the response!

// cb function is known as the request handler - it runs 1x for EVERY HTTP request that's made to the server
const server = http.createServer((request, response) => {
    request.on("error", (err) => console.log("err in request: ", err));
    response.on("error", (err) => console.log("err in response: ", err));

    // this piece of code runs for every single request that comes in
    // console.log("our request obj: ", request);
    console.log("request method: ", request.method);
    console.log("request url: ", request.url);
    console.log("request headers: ", request.headers);

    if (request.method === "GET") {
        if (request.url === "/secret-page") {
            // we want to redirect them away! it's a secret page
            response.statusCode = 302;
            response.setHeader("Location", "/");
            response.end(); // this actually sends our response! don't forget to do it!
        } else {
            response.setHeader("content-type", "text/html");
            response.statusCode = 200;
            // option 1 in how to send a response
            // response.write(`Happy HTTP day!`);
            // response.end();
            // option 2 in how to send a response
            response.end(`<!doctype html>
                                        <html>
                                        <title>Hello World!</title>
                                        <p>Hello World!</p>
                                        </html>`);
        }
    } else if (request.method === "PUT") {
        response.statusCode = 200;
        response.end(`<h1> You just made a PUT request! </h1>`);
    } else if (request.method === "POST") {
        console.log("you just made a POST request");

        // body will store the completed value / data coming from the client
        let body = "";

        request
            .on("data", (chunk) => {
                // body = body + chunk;
                body += chunk;
            })
            .on("end", () => {
                // this event will run when all the data is finished coming in from the client!
                console.log("body: ", body);
                response.setHeader("/");
                response.statusCode = 302;
                response.end();
            });
    } else if (request.method === "HEAD") {
        response.statusCode = 200;
    } else if (
        request.method !== "HEAD" ||
        request.method !== "GET" ||
        request.method !== "POST"
    ) {
        response.statusCode = 405;
        response.end();
    }
});
server.listen(8080, () => console.log("server is listening...."));

// listen(arg1, arg2) method takes 2 arguments
// arg1 - port that we'll be listening to
// arg2 - callback fun that will output a string! (our sanity check)

// ****PART II****
// const date = new Date();
// const server = http.createServer((request, response) => {
//     request.on("error", (err) => console.log("err in request: ", err));
//     response.on("error", (err) => console.log("err in response: ", err));

//     console.log("request method: ", request.method);
//     console.log("request url: ", request.url);
//     console.log("request headers: ", request.headers);
//     }

//     appendFile('message.txt', 'data to append', (err) => {
//         if (err) throw err;
//         console.log('The "data to append" was appended to file!');
//             });

//         server.listen(8080, () => console.log("server is listening...."));
