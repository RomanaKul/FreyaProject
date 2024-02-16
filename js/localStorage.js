import { commands } from "./commands.js";

export function saveToStorage() {
  localStorage.setItem("command", JSON.stringify(commands));
}
