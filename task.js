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
Master JavaScript`];
// REMOVE MENU
// records the users response
let remove;
// stores removed tasks
let removeTasks;
// stores index of removed tasks
let removeIndex;


//START CODE
while (true) {
  if (response.toUpperCase() === `CLOSE`) {
    alert(`Thank you for using Task Manager!`);
  } else if (response.toUpperCase() === `TASKS`) {
    alert(tasks);
    prompt(startMenu);
    //TASK MANAGER INTERMEDIATE
  } else if (response.toUpperCase() === `NEW`) {
    response = prompt(`Please enter the new task:`);
    alert(`"${response}" has been added!`);
    prompt(startMenu);
    alert(`${tasks} \n${response}`);
    // TASK MANAGER ADVANCED
  } else if (response.toUpperCase() === `REMOVE`) {
    while (true) {
      for (let i = 0; i < tasks.length; i++) { //(initialization of my counter) i = index let index = 0; (condition) keep going until the following is false: (index) is less than the current number of tasks; (iteration) increment the counter by 1.
        tasks = tasks.length + `${i + 1}: ${tasks[i]}`;
      }
        removeIndex = prompt(`Please enter a number to remove:\n${tasks}`) - 1;
        if (removeIndex >= 0 && removeIndex < tasks.length) { // if less than or equal to zero AND  less than the current number of tasks
        removeTasks = tasks.splice(removeIndex,1); // removes 1 task from the tasks menu
        };
    };

  } else {
    prompt(startMenu); // displays the menu if none of the other condition are met
  }
  break;
}