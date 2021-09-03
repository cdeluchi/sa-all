// **** PART I **** //

// Write a function named logSizes that expects to be passed the full path to a directory.
// It should use fs.readdir with the withFileTypes option set to true in order to read the contents of the directory.

const fs = require("fs");
const path = require("path");
const pathFile = __dirname + "/files";

function logSizes(directory) {
    fs.readdir(directory, { withFileTypes: true }, (err, files) => {
        // import { readFile } from "fs";
        if (err) {
            return console.log("err: ", err);
        }
        for (let i = 0; i < files.length; i++) {
            if (files[i].isFile()) {
                fs.stat(directory + "/" + files[i].name, (err, stat) => {
                    if (err) {
                        console.log("err", err);
                    } else {
                        console.log(directory + "/" + files[i].name, stat.size);
                    }
                });
            } else {
                const newDirectory = directory + "/" + files[i].name;
                logSizes(newDirectory);
            }
            console.log(
                "Item " + files[i].name + " is a file:",
                files[i].isFile()
            );
        }
    });
} //fii

logSizes(pathFile);

// For every file it should call fs.stat to determine the file's size.
// Once the size is known, it should log the path to the file followed by a colon
// and the size of the file.

// For every directory, it should call itself
// and pass the path to the directory so that the sizes of all the files
// contained in the directory will be logged.

// **** PART II **** //

function mapSizes(__dirname) {
    const files = fs.readdirSync(__dirname, { withFileTypes: true });
    let object = {};

    for (let i = 0; i < files.length; i++) {
        // console.log("Item " + files[i].name + " is a file:", files[i].isFile());
        if (files[i].isFile() == true) {
            const stats = fs.statSync(path.join(__dirname, files[i].name));
            // console.log(stats);
            object[files[i].name] = stats.size;
            console.log(object[files[i].name]);
        } else {
            object[files[i].name] = mapSizes;
            path.join(__dirname, files[i].name);
        }
    }
    return object;
}
mapSizes(__dirname);

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
