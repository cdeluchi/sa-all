const readline = require("readline");
const chalk = require("chalk");

console.log(chalk.magenta("Hi classic moviers"));

const rl = readline.createInterface({
    //object with properties
    input: process.stdin, //stander input
    output: process.stdout, //stander output
});

const story = {
    q: "Welcome to The Land Of Classic Movies! Would you like to play? Yes or No?",
    answers: {
        yes: {
            q: "Great, let’s play! The movie, North by Northwest, is from which director?  Tarantino or Hitchcock? ",
            answers: {
                Hitchcock: {
                    q: "Yes, you're right! and do you know the movie James Bond was inpired by this movies?",
                    answers: {
                        no: "Yes, isn't amazing?",
                    },
                },
                Tarantino: "Nope! It’s from Hitchcock",
            },
        },
        no: "You're should try, it’s a classic!",
    },
};

function askQuestion(obj) {
    rl.question(chalk.cyan(obj.q), (answer) => {
        if (typeof obj.answers[answer] === "object") {
            askQuestion(obj.answers[answer]);
        } else if (typeof obj.answers[answer] == "string") {
            console.log(obj.answers[answer]);
            // console.log(obj.answers[answer]);
            // askQuestion(obj.answers[answer]);
            // askQuestion(obj);
            rl.close();
        } else {
            // console.log(chalk.red("You're should try, it’s a classic!"));
            askQuestion(obj);
        }
    });
}
askQuestion(story);

// por padrao o node sabe que o index é a mesma coisa que você colocar .
// no terminar precisamos ser muito explicitos de onde estamos. então precisa terminar o que você está fazendo.
//a funcao askquestion recebe
// data types are object and strings
