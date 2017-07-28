console.log('toDoJS.js is connected');

//make an array of every list item and add a "delete" hide button

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  // makes neat x
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

//hide list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  //anon function to not trigger until clicked.
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function newTask() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("taskInput").value;
  var task = document.createTextNode(inputValue);
  li.appendChild(task);

  if (inputValue === '') {
    alert("Task is empty");
  } else {
    document.getElementById("toDoList").appendChild(li);
  }
  document.getElementById("taskInput").value = '';
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\ \u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


var addBtn = document.getElementById("addBtn");
addBtn.onclick = newTask;

var li = getElementsByTagName("li");

// change class to done
var listItems = document.querySelectorAll('li');
for(var i = 0; i < listItems.length; i++){
    listItems[i].addEventListener('click', function(event) {
      this.classList.toggle('done');
    });
}
