import { commands, CommandElement } from "./commands.js";
import { saveToStorage } from "./localStorage.js";

const modal = document.querySelector(".modal");
const overlay = document.getElementById("overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const saveInputBtn = document.getElementById("saveBtn");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  saveInputBtn.classList.remove("hidden");
};

openModalBtn.addEventListener("click", openModal);

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  saveInputBtn.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
saveInputBtn.addEventListener("click", closeModal);

const clearInput = function () {
  const inputs = document.querySelectorAll("#command, #comment");

  inputs.forEach((input) => {
    input.value = "";
  });
};

const container = document.getElementById("tableElement");

function renderCommands() {
  let myIndex = 1;
  container.innerHTML = "";
  for (const command of commands) {
    addCommandToTable(command, container, myIndex);
    myIndex = myIndex + 1;
  }
  openModalEditWithBtn();
  deleteCommand();
}

renderCommands();

saveInputBtn.addEventListener("click", getInputCommand);

function getInputCommand() {
  let inputCommand = document.getElementById("command").value;
  let inputComment = document.getElementById("comment").value;

  let input = {
    name: inputCommand,
    comment: inputComment,
  };
  commands.push(input);
  renderCommands();
  saveToStorage();
}

saveInputBtn.addEventListener("click", clearInput);
closeModalBtn.addEventListener("click", clearInput);
overlay.addEventListener("click", clearInput);

function addCommandToTable(command, container, index) {
  const command1El = new CommandElement(command.name, command.comment, index);
  container.appendChild(command1El);
}

// *** end of the modal for add button ***

// *** start of the modal for edit button ***
const modalEdit = document.querySelector(".modalEdit");
const overlayEdit = document.querySelector(".overlayEdit");
const closeModalEditBtn = document.querySelector(".btn-closeEdit");
const saveEditBtn = document.querySelector(".btnEdit");
const commandInput = document.querySelector("#commandEdit");
const commentInput = document.querySelector("#commentEdit");

let editingIndex;

function openModalEdit(i) {
  editingIndex = i;
  modalEdit.classList.remove("hiddenEdit");
  overlayEdit.classList.remove("hiddenEdit");
  saveEditBtn.classList.remove("hiddenEdit");
  inputCommandEdit(i);
}

function openModalEditWithBtn() {
  const button4 = document.getElementsByClassName("btn_edit");
  for (let i = 0; i < button4.length; i++) {
    if (button4[i]) {
      let c = button4[i];
      c.addEventListener("click", () => openModalEdit(i));
    }
  }
}

const closeModalEdit = function () {
  modalEdit.classList.add("hiddenEdit");
  overlayEdit.classList.add("hiddenEdit");
  saveEditBtn.classList.add("hiddenEdit");
};

closeModalEditBtn.addEventListener("click", closeModalEdit);
overlayEdit.addEventListener("click", closeModalEdit);
saveEditBtn.addEventListener("click", closeModalEdit);

function inputCommandEdit(i) {
  commandInput.value = commands[i].name;
  commentInput.value = commands[i].comment;
}

// *** end of the modal for edit button ***

// *** save edited text on the web ***

function saveEditedCommand() {
  commands[editingIndex].name = commandInput.value;
  commands[editingIndex].comment = commentInput.value;

  renderCommands();
  saveToStorage();
}
saveEditBtn.addEventListener("click", saveEditedCommand);

// *** delete button ***

function deleteCommand() {
  const deleteButtons = document.querySelectorAll(".btn_deleteCommand");

  deleteButtons.forEach((deleteBtn, index) => {
    deleteBtn.addEventListener("click", () => {
      commands.splice(index, 1);

      renderCommands();
      saveToStorage();
    });
  });
}
