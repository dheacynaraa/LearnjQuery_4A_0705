// Get Element from HTML
const inputTask = $("#inputTask");
const inputDeadline = $("#inputDeadline");
const btnAdd = $("#btnAdd");
const taskList = $("#taskList");
const btnClear = $("#btnClear");

// Action for Add Data Button
btnAdd.click(function () {
  let textTask = inputTask.val();

  let deadlineTask = inputDeadline.val();

  if (textTask === "") {
    alert("Data must be entered!");
    return;
  }
  
    if (deadlineTask === "") {
    alert("Deadline task must be entered!");
    return;
  }

  inputTask.val("");
  
  let newList = $("<li>");
  
});