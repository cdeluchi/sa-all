// const fs = require("fs");
// const path = require("path");
// const pathFile = __dirname + "/files";
// const fs = require("fs");
// const readdir = promisify(fs.readdir);
// const fs = require("fs").promises;

const { readdir, stat } = require("fs").promises;
const { promisify } = require("util");

function logSizes(path) {
    return readdir(path, {
        withFileTypes: true,
    })
        .then((files) => {
            const promises = [];
            for (let i = 0; i < files.length; i++) {
                if (files[i].isFile()) {
                    stat(path + "/" + files[i].name)
                        .then((res) => {
                            console.log(path + "/" + files[i].name + res.size);
                        })
                        .catch((err) => {
                            console.log("err in stat", err);
                        });
                } else {
                    logSizes(path + "/" + files[i].name);
                }
            }
            return Promise.all(promises);
        })
        .catch((err) => console.log("err in readdir", err));
}
const statPromises = stat(__dirname);
statPromises.push(promises);
const logSizesPromises = logSizes(__dirname);
logSizesPromises.then(() => console.log("Done!"));

// return readdir().then((files, { withFileTypes:true})=>{
// console.log("files:", files); // this will return an array of files
// we want to loop over our files/directories
// check IF sth is a file IF YES:
// this is where we want to call stat, for each of the files of it indeed a file
// stat(pathWeAreOne).then((stats)=>{
// here I get access to whate
// ver the resolved promise, i.e. the async process leads to
// so here I can log the files name, and size
// })
// Check IF st is a directory if YES:
//we want to call logSizes again and pass to it the path to the nested directory
// }).catch(console.log("err in readdir:", err))
// }
// function logSizes(directory) {
//     fs.readdir(directory, { withFileTypes: true }, (err, files) => {
//         // import { readFile } from "fs";
//         if (err) {
//             return console.log("err: ", err);
//         }
//         for (let i = 0; i < files.length; i++) {
//             if (files[i].isFile()) {
//                 fs.stat(directory + "/" + files[i].name, (err, stat) => {
//                     if (err) {
//                         console.log("err", err);
//                     } else {
//                         console.log(directory + "/" + files[i].name, stat.size);
//                     }
//                 });
//             } else {
//                 const newDirectory = directory + "/" + files[i].name;
//                 logSizes(newDirectory);
//             }
//             console.log(
//                 "Item " + files[i].name + " is a file:",
//                 files[i].isFile()
//             );
//         }
//     });
// } //fii

// logSizes(pathFile);

// function mapSizes(__dirname) {
//     const files = fs.readdirSync(__dirname, { withFileTypes: true });
//     let object = {};

//      for (let i = 0; i < files.length; i++) {
//         // console.log("Item " + files[i].name + " is a file:", files[i].isFile());
//         if (files[i].isFile() == true) {
//             const stats = fs.statSync(path.join(__dirname, files[i].name));
//             // console.log(stats);
//             object[files[i].name] = stats.size;
//             console.log(object[files[i].name]);
//         } else {
//             object[files[i].name] = mapSizes;
//             path.join(__dirname, files[i].name);
//         }
//     }
//     return object;
// }
// mapSizes(__dirname);

// fs.writeFileSync(
//     __dirname + "/README.json",
//     JSON.stringify(mapSizes(__dirname), null, 4),
// );

// function logSizes(__dirname) {
//     return fs.readdir(__dirname).then((files) => console.log(files[0]));
// }
// logSizes()
// .catch((err) => console.log(err));

// function mapSizes(__filename) {
//     return fs.readdir(__filename).then((files) => console.log(files[0]));
// }
// mapSizes()
// .catch((err) => console.log(err));

// fs.writeFileSync(){
//     return fs.readdir(__filename).then((files) => console.log(files[0]));
// }
