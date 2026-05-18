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

  // Action for Check Icon to Change The Status
  newList.on("click", ".fa-check", function () {
    $(this)
      .closest("li")
      .find(".status")
      .text("Done")
      .css("color", "green");

    $(this)
      .closest("li")
      .find(".task")
      .css("text-decoration", "line-through");  

    $(this)
      .closest("li")
      .find(".deadline")
      .css("text-decoration", "line-through");    
  });

  // Action for Edit Icon to Change The Task Tittle
  newList.on("click", ".fa-edit", function () {
      const editTextTask = prompt("Edit Task : ", textTask);
      const editDeadlineTask = prompt("Deadline Task : ", deadlineTask);

      if (
        editTextTask !== null &&
        editTextTask !== "" &&
        editDeadlineTask !== null &&
        editDeadlineTask !== ""
      ) {
        $(this)
          .closest("li")
          .find(".task")
          .text(`${editTextTask}`);

        $(this)
          .closest("li")
          .find(".deadline")
          .text(`${editDeadlineTask}`);
      }
  });
    
});