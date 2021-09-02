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
            answer: {
                Hitchcock: {
                    q: "Yes, you're right! and do you know the movie James Bond was inpired by this movies?",
                    answer: {
                        no: "Yes, amazing!",
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
        //question
        if (obj.answers[answer]) {
            // console.log(chalk.green(" Too bad! :("));
            rl.close();
        } else if (obj.answers[answer]) {
            // console.log(
            //     chalk.red("that's not the right answer... try again!!")
            // );
            askQuestion(story);
        } else {
            // console.log(
            //     chalk.red("that's not the right answer... try again!!")
            // );
            askQuestion(story);
        }
    });
}
askQuestion(story);

// por padrao o node sabe que o index é a mesma coisa que você colocar .
// no terminar precisamos ser muito explicitos de onde estamos. então precisa terminar o que você está fazendo.
//a funcao askquestion recebe
// data types are object and strings
