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

  inputs.forEach(input => {
    input.value = '';
  });
}

saveInputBtn.addEventListener("click", clearInput);
closeModalBtn.addEventListener("click", clearInput);
overlay.addEventListener("click", clearInput);







const commands = [
  { name: 'Сидіти', comment: 'Потрібно закріпити, що команда скасовується лише після слова "Добре".' },
  { name: 'Лежати', comment: 'Інколи ще плутає з командою "Сидіти". Швидко розриває команду, не дочекавшись "Добре".' },
  { name: 'Дай лапу', comment: 'Виконує добре. Навчити міняти лапу' },
]

const container = document.getElementById("tableElement");

let myIndex = 1;
for (const command of commands) {
  addCommandToTable(command, container, myIndex)
  myIndex = myIndex + 1
}






function addCommandToTable(command, container, index) {
  const command1El = new CommandElement(command.name, command.comment, index);
  container.appendChild(command1El);
}


function CommandElement(commandName, commandComment, index) {
  this.el = document.createElement('tr')


  const td1 = document.createElement('td')
  td1.innerText = index;
  this.el.appendChild(td1)

  const td2 = document.createElement('td')
  td2.innerText = commandName;
  this.el.appendChild(td2)

  const td3 = document.createElement('td')
  td3.innerText = commandComment
  this.el.appendChild(td3)

  const td4 = document.createElement('td')
  const button4 = document.createElement('button')
  button4.classList.add("btn_edit");
  button4.type = "button"
  const img4 = document.createElement('img')
  img4.src = "image/edit_btn.webp"
  img4.alt = "edit"
  button4.appendChild(img4)
  td4.appendChild(button4)
  this.el.appendChild(td4)

  return this.el;
}
