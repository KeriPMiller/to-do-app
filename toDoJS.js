console.log('toDoJS.js is connected');

function newTask() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("taskInput").value;
  var task = document.createTextNode(inputValue);
  li.appendChild(task);

  if ( inputValue === '' ) {
    alert("Task is empty");
  } else {
    document.getElementById("toDoList").appendChild(li);
  }
}
