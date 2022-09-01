//the "EL" suffix identifies that this is a DOM element; the naming will help me keep track of the stored DOM elements.
//this targets the button but doesnt mean the button works yet.
var formEl = document.querySelector("#task-form"); //this is targeting the "Ul class in the html".
var tasksToDoEl = document.querySelector("#tasks-to-do");

//when the button is clicked the event listener is going to display a new function.
var taskformHandler = function (event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var tasktypeInput = document.querySelector("select[name='task-type']").value;
  
  
  // package up data as an object
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
};


// check if input values are empty strings
if (!taskNameInput || !taskTypeInput) {
    alert("You need to fill out the task form!");
    return false;
};

formEl.reset();

// send it as an argument to createTaskEl
createTaskEl(taskDataObj);
};

var createTaskEl = function (taskDataObj) {
// create list item
var listItemEl = document.createElement("li");
listItemEl.className = "task-item";

// create div to hold task info and add to list item
var taskInfoEl = document.createElement("div");
taskInfoEl.className = "task-info";
taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
listItemEl.appendChild(taskInfoEl);

// add entire list item to list
tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler);