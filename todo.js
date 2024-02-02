// Create a "close" button and append it to each list item
var myTodolist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myTodolist.length; i++) {
  var span = document.createElement("SPAN");
  var removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";
  removeButton.className = "remove";
  span.appendChild(removeButton);
  myTodolist[i].appendChild(span);

  //Allow users to edit their task
myTodolist[i].addEventListener("dblclick", function () {
    var listItem = this;
    var textNode = listItem.firstChild;
    var newText = prompt("Edit your task:", textNode.nodeValue);
    if (newText !== null && newText.trim() !== "") {
      textNode.nodeValue = newText;
    }
  });
}


// Click on a remove button to hide the current list item
var close = document.getElementsByClassName("remove");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);


// Create a new list item when clicking on the "Add" button
function newElement(event) {
  event.preventDefault();
  var li = document.createElement("li");
  var inputValue = document.getElementById("addTodo").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("todoList").appendChild(li);
  }
  
  document.getElementById("addTodo").value = "";

  //Animation
  li.classList.add("bounce-in")

  var span = document.createElement("SPAN");
  var removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";
  removeButton.className = "remove";
  span.appendChild(removeButton)
  li.appendChild(span)

   // Double click on the text to enable editing
   li.addEventListener("dblclick", function () {
    var listItem = this;
    var textNode = listItem.firstChild;
    var newText = prompt("Edit your task:", textNode.nodeValue);
    if (newText !== null && newText.trim() !== "") {
      textNode.nodeValue = newText;
    }
  });

  removeButton.onclick = function () {
    var div = this.parentElement.parentElement;
    div.style.display = "none";
  };
}
