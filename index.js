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
                "Edit Todo",
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
            const deleteIndex = await inquirer.prompt([
                {
                    type: "number",
                    name: "index",
                    message: "What index do you want to delete?"
                }
            ]);
            if (todoList[deleteIndex.index]) {
                todoList.splice(deleteIndex.index, 1);
            }
            else {
                console.log('Todo not found');
            }
            break;
        case "Edit Todo":
            const editIndex = await inquirer.prompt([
                {
                    type: "number",
                    name: "index",
                    message: "What index do you want to edit?"
                }
            ]);
            const newTodo = await inquirer.prompt([
                {
                    type: "input",
                    name: "todo",
                    message: `${todoList[editIndex.index]}: `
                }
            ]);
            todoList[editIndex.index] = newTodo.todo;
            // todoList.splice(editIndex.index, 1)
            break;
        case "Quit":
            isRunning = false;
            break;
    }
}
