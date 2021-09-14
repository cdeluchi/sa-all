// const fs = require("fs");
const path = require("path");
const pathFile = __dirname + "/files";

// const fs = require("fs");
const { promisify } = require("util");
const readdir = promisify(fs.readdir);
const fs = require("fs").promises;

function logSizes() {
   return fs.readdir(__dirname).then((files) => console.log(file[0]);
}
logSizes();


function mapSizes() {
    return fs.readdir(__filename).then((files) => console.log(files[0])
    )}
    mapSizes();

    
fs.writeFileSync(
    __dirname + "/README.json",
    JSON.stringify(mapSizes(__dirname), null, 4),
    (err) => {
        if (err) {
            return console.log("err", err);
        }
    }
);

// console.log("Second Important Thing");
Promise.all([logSizes(directory), mapSizes(__dirname)])
    .then((results) => {
        console.log("Done!");
    })
    .catch((err) => console.log(err));
