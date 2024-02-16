export let commands = JSON.parse(localStorage.getItem("command")) || [
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

export function CommandElement(commandName, commandComment, index) {
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
