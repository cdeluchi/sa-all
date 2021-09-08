const fs = require("fs");
// module.exports makes sure that this function is added to the export object of this module,
// which means other files can call this function, when they require this module
module.exports.projectOverviewHtml = function () {
    console.log("projectOverviewHtml running in generateOverview.js");
    // #1 get our porjects: use readdirSync to understand which projects we
    const directories = fs.readdirSync(`${__dirname}/projects`, {
        withFileTypes: true,
    });
    // goal: generate html, that consists of links for each project in the projects directory
    // #3 generate the HTML: we want to loop over our list, and for each element
    let html = `
            <!doctype html>
            <html>
                <title>Portfolio list</title>
               <body>
        `;
    for (var i = 0; i < directories.length; i++) {
        if (directories[i].isDirectory()) {
            html +=
                "<a href=" +
                directories[i].name +
                "> " +
                directories[i].name +
                "</a>";
        }
    }
    html += "</html>";

    // the correct href and a text contained between the opening and the closing of the a tag!

    // # 4 make sure that your funciton is actually returning that html string!!!
    return html;
    // to achieve this we will:
    // have in the porojects directory
    // #2 readdir will give you a list of projects contained in the projects directory
    // in that list we want to generate a correct a tag, that means have it compose
};
