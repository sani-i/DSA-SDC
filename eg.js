const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const prompt = readline.createInterface({ input, output });

function ask(question) {
  return new Promise((resolve) => prompt.question(question, resolve));
}

async function main() {
  console.log("Welcome!");

  const name = await ask("What is your name? ");
  const address = await ask("What is your address? ");
  const profession = await ask("What is your profession? ");

  console.log("\nHere is the information you shared:");
  console.log(`Your Name is ${name}`);
  console.log(`You live in ${address}`);
  
  

  prompt.close();
}

main();
