// *** start of the modal for add button ***

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

saveInputBtn.addEventListener("click", clearInput);
closeModalBtn.addEventListener("click", clearInput);
overlay.addEventListener("click", clearInput);

let commands = JSON.parse(localStorage.getItem("command")) || [
  {
    name: "Сидіти",
    comment:
      'Потрібно закріпити, що команда скасовується лише після слова "Добре".',
  },
  {
    name: "Лежати",
    comment:
      'Інколи ще плутає з командою "Сидіти". Швидко розриває команду, не дочекавшись "Добре".',
  },
  {
    name: "Дай лапу",
    comment: "Виконує добре. Навчити міняти лапу.",
  },
];

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

function addCommandToTable(command, container, index) {
  const command1El = new CommandElement(command.name, command.comment, index);
  container.appendChild(command1El);
}

function CommandElement(commandName, commandComment, index) {
  this.el = document.createElement("tr");

  const td1 = document.createElement("td");
  td1.innerText = index;
  this.el.appendChild(td1);

  const td2 = document.createElement("td");
  td2.innerText = commandName;
  this.el.appendChild(td2);

  const td3 = document.createElement("td");
  td3.innerText = commandComment;
  this.el.appendChild(td3);

  const td4 = document.createElement("td");
  const button4 = document.createElement("button");
  button4.classList.add("btn_edit");
  button4.type = "button";
  const img4 = document.createElement("img");
  img4.src = "image/edit_btn.webp";
  img4.alt = "edit";
  button4.appendChild(img4);
  td4.appendChild(button4);
  this.el.appendChild(td4);

  const td5 = document.createElement("td");
  const button5 = document.createElement("button");
  button5.classList.add("btn_deleteCommand");
  button5.type = "button";
  button5.innerText = "x";
  td5.appendChild(button5);
  this.el.appendChild(td5);

  return this.el;
}
// *** end of the modal for add button ***

// *** start of the modal for edit button ***
const modalEdit = document.querySelector(".modalEdit");
const overlayEdit = document.querySelector(".overlayEdit");
const hiddenEdit = document.querySelector(".hiddenEdit");
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

// *** save edited text on the web. start ***

function saveEditedCommand() {
  commands[editingIndex].name = commandInput.value;
  commands[editingIndex].comment = commentInput.value;

  renderCommands();
  saveToStorage();
}

// *** local storage ***

function saveToStorage() {
  localStorage.setItem("command", JSON.stringify(commands));
}

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
