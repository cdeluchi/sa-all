const PORT = 8080;
const express = require("express");
const hb = require("express-handlebars");
const path = require("path");
// const { mainModule } = require("process");
const app = express();
const projects = require("./projects.json");

app.engine("handlebars", hb());
app.set("view engine", "handlebars");

const publicPath = path.join(__dirname, "..", "public");
console.log("PublicPath", publicPath);

app.use(express.static(publicPath));
app.use(express.static("./project"));

app.get("/", (req, res) => {
    res.render("home", {
        projects,
    });
});
app.get("/projects/:project", (req, res) => {
    console.log(req.params.project);
    const projToFind = req.params.project;
    const selectedProj = projects.find((proj) => proj.directory === projToFind);
    console.log("Project found", selectedProj);
    if (!selectedProj) {
        return res.sendStatus(404);
    } else {
        console.log("we have a project to server");
        res.render("description", {
            selectedProj,
            projects,
            layout: "main",
            title: "My Projects",
            text: "Minhas mensagens especiais",
            footer: "Designed by cdeluchi",
        });
    }
});

app.listen(PORT, () => console.log(`Listening on ${PORT}...`));
