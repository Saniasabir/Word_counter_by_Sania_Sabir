#! /usr/bin/env node
// importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";

//Display a colorfull Welcome message 
console.log(chalk.bold.cyanBright("\n \t\t Sania Sabir - word counter"));
console.log("=".repeat(60));

// prompt the user to enter a sentence
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence abcd",

    }
]);

//Trimming the sentence and splitting it into words base on "spaces"
let words = answer.sentence.trim().split(" ");

//analysis of user input sentence 
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n -word count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));