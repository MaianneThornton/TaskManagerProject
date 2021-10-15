// TASK MANAGER

//VARIABLES VARIABLES VARIABLES
// // To create a new line (line break)
// const newLine = `\r\n`
// // To creates two new lines (line breaks)
// const newLines = `\r\n` + `\r\n`
// Starting Menu Prompt
const startMenu = `TASK MANAGER 

What would you like to do (Please enter one of the options below): "TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

// For storing the users response
let response;

//START MENU (A.K.A. Task Manager Basics)
response = prompt(`${startMenu}`);
//TASKS MENU
let tasks = [`Charge MacBook
Master JavaScript`]


//START CODE
while (true) {
  if (response.toUpperCase() === `CLOSE`) {
    alert(`Thank you for using Task Manager!`)
  } else if (response.toUpperCase() === `TASKS`) {
    alert(tasks)
    prompt(startMenu);
    //TASK MANAGER INTERMEDIATE
  } else if (response.toUpperCase() === `NEW`) {
    response = prompt(`Please enter the new task:`)
    alert(`"${response}" has been added!`)
    prompt(startMenu)
    alert (`${tasks} \n${response}`)
  }  else {
    prompt(startMenu)
  }
  break;
}
//-----------------YASH'S SANDBOX---------------------------

while (userInput.toUpperCase() !== "CLOSE") {
if (userInput.toUpperCase() === "TASK")
for (task of tasks) {
showTasks = showTasks + `${task}\n`
}
}