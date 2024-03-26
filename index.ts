#! /usr/bin/env node 
// shabeng

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "Firstnumber" },
  { message: "Enter second number", type: "number", name: "Secondnumber" },
  {
    message: "Select one of the operator to perfrom operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// conditional stetement
if(answer.operator === "Addition"){
    console.log(answer.Firstnumber + answer.Secondnumber);
}else if(answer.operator === "Subtraction"){
    console.log(answer.Firstnumber - answer.Secondnumber);
}else if(answer.operator === "Multiplication"){
    console.log(answer.Firstnumber * answer.Secondnumber);
}else if(answer.operator === "Division"){
    console.log(answer.Firstnumber / answer.Secondnumber);
}else{
    console.log("plese select valid operator");
}


