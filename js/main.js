import { header, footer } from "./templates/templates.js";
import menu from "./utils/menu.js";

const headerElement = document.querySelector("#header");
const footerElement = document.querySelector("#footer");

headerElement.innerHTML = header;
footerElement.innerHTML = footer;

menu();
