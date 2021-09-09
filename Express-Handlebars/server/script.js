const PORT = 8080;
const express = require("express");
const hb = require("express");
const path = require("path");
const app = express();
const project = require("./project.json");

app.engine("handlebars", hb());
app.set("view engine", "handlebars");

const publicPath = path.join(__dirname, "..", "public");

app.use(express.static(publicPath));

app.get("/", (req, res) => {
    res.render("home", {
        name: "project",
        message: "Welcome!",
    });
});

app.get("/project", (req, res) => {
    res.render("project", {
        project,
        tittle: "project",
    });
});

app.listen(PORT, () => console.log(`Listening on ${PORT}...`));
