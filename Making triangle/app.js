import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magenta("~".repeat(117)));
console.log(chalk.green.bold("-".repeat(50)), chalk.blue.bold("PYRAMID PROJECT"), chalk.green.bold("-".repeat(50)));
console.log(chalk.green.bold("-".repeat(44)), chalk.red.italic("MADE BY"), chalk.red.bold("ALIYAN JABBAR KHAN"), chalk.green.bold("-".repeat(45)));
console.log(chalk.magenta("~".repeat(117)));
let user1 = await inquirer.prompt({
    name: "input",
    type: "input",
    message: chalk.yellow.bold("INPUT SUBSTANCE WHOSE PYRAMID YOU WANT!")
});
let user2 = await inquirer.prompt({
    name: "input",
    type: "number",
    message: chalk.yellow.bold("INPUT NUMBER OF ROWS YOU WANT!"),
    validate: (num) => {
        if (num < 0) {
            return chalk.red.bold("INVALID NUMBER OF ROWS!");
        }
        else if (Number.isNaN(num)) {
            return chalk.red.bold("INPUT MUST BE A NUMBER!");
        }
        else {
            return true;
        }
    },
});
for (let i = `${user1.input}`; i <= `${user1.input}`.repeat(user2.input); i += `${user1.input}`) {
    console.log(i);
}
