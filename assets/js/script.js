//the "EL" suffix identifies that this is a DOM element; the naming will help me keep track of the stored DOM elements.
//this targets the button but doesnt mean the button works yet. 
var buttonEl = document.querySelector("#save-task");//this is targeting the "Ul class in the html".
var tasksToDoEl = document.querySelector("#tasks-to-do");

//when the button is clicked the event listener is going to display a new function.
    var createTaskHandler = function() {
    var listItemEl = document.createElement("li");// this is tageting the list items in the html
    listItemEl.className = "task-item";// this is styling the list item so it is the same as the others by calling the html id.
    listItemEl.textContent = "This is a new task.";// this is going to be the new message in the list
    tasksToDoEl.appendChild(listItemEl);// this is telling the list items to be put into the Ul items in the html. 
};

buttonEl.addEventListener("click", createTaskHandler) 
