const fs = require("fs");
// module.exports makes sure that this function is added to the export object of this module,
// which means other files can call this function, when they require this module
module.exports.projectOverviewHtml = function () {
    console.log("projectOverviewHtml running in generateOverview.js");
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

    // goal: generate html, that consists of links for each project in the projects directory
    // to achieve this we will:
    // #1 get our porjects: use readdirSync to understand which projects we
    // have in the porojects directory
    // #2 readdir will give you a list of projects contained in the projects directory
    // #3 generate the HTML: we want to loop over our list, and for each element
    // in that list we want to generate a correct a tag, that means have it compose
    // the correct href and a text contained between the opening and the closing of the a tag!
    // # 4 make sure that your funciton is actually returning that html string!!!
};
