// Get Element from HTML
const inputTask = document.getElementById("inputTask");
const btnAdd = document.getElementById("btnAdd");
const taskList = document.getElementById("taskList");
const btnClear = document.getElementById("btnClear");

// Action for Add Data Button
btnAdd.addEventListener("click", function () {
  let textTask = inputTask.value;

  if (textTask === "") {
    alert("Data must be entered!");
    return;
  }

  let deadlineTask = prompt("Deadline Task : ");
  let newList = document.createElement("li");

  // Change newList Value
  newList.innerHTML = `<div class="task-container">
        <div class="task">${textTask}</div>
        <div class="deadline">${deadlineTask}</div>
        <div class="status">On Progress</div>
    </div>

    <div class="actions">
        <i class="fas fa-check"></i>
        <i class="fas fa-edit"></i>
        <i class="fas fa-trash"></i>
    </div>`;

  // Action for Check Icon to Change The Status
  if (
    (newList.querySelector(".fa-check").onclick = function () {
      newList.querySelector(".status").innerText = "Done";
      newList.querySelector(".status").style.color = "green";
    })
  );

  // Action for Edit Icon to Change The Task Title
  newList.querySelector(".fa-edit").onclick = function () {
    const editTextTask = prompt("Edit Task : ", textTask);
    const editDeadlineTask = prompt("Deadline Task : ", deadlineTask);

    if (
      editTextTask !== null &&
      editTextTask !== "" &&
      editDeadlineTask !== null &&
      editDeadlineTask !== ""
    ) {
      newList.querySelector(".task").innerText = editTextTask;
      newList.querySelector(".deadline").innerText = editDeadlineTask;
    }
  };

  // Action for Trash Icon to Remove The Task
  if (
    (newList.querySelector(".fa-trash").onclick = function () {
      newList.remove();
    })
  )
    // Action for Clear Button to Remove All Task
    btnClear.addEventListener("click", function () {
      taskList.remove();
    });

  taskList.appendChild(newList);

  inputTask.value = "";
});
