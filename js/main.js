import { header, footer } from "./templates/templates.js";
import menu from "./utils/menu.js";
import lightMode from "./utils/darkMode.js";
import skillsList from "./utils/skillsList.js";

const headerElement = document.querySelector("#header");
const footerElement = document.querySelector("#footer");

headerElement.innerHTML = header;
footerElement.innerHTML = footer;

menu();
lightMode();
skillsList();
