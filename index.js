#! /usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let isRunning = true;
while (isRunning) {
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What do you want to do?",
            choices: [
                "Add Todo",
                "View Todos",
                "Delete Todo",
                "Quit"
            ]
        }
    ]);
    switch (answer.action) {
        case "Add Todo":
            const todo = await inquirer.prompt([
                {
                    type: "input",
                    name: "todo",
                    message: "What do you want to add?"
                }
            ]);
            todoList.push(todo.todo);
            break;
        case "View Todos":
            console.table(todoList);
            break;
        case "Delete Todo":
            const index = await inquirer.prompt([
                {
                    type: "number",
                    name: "index",
                    message: "What index do you want to delete?"
                }
            ]);
            todoList.splice(index.index, 1);
            break;
        case "Quit":
            isRunning = false;
            break;
    }
}
