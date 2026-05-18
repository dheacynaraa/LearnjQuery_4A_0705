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

  // Change newList Value
  newList.html(`
        <div class="task-container">
            <div class="task">${textTask}</div>
            <div class="deadline">${deadlineTask}</div>
            <div class="status">On Progress</div>
        </div>

        <div class="actions">
            <i class="fas fa-check"></i>
            <i class="fas fa-edit"></i>
            <i class="fas fa-trash"></i>
        </div>
  `);
  
  // Add newList value to taskList
  taskList.append(newList);

});