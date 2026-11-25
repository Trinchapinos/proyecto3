import { cheatsheets } from "../data/cheatsheets.js";

export default function cheatsheetsList() {
  const containerCheatsheet = document.querySelector("#cheatsheetDiv");
  const cheatsheetsHTML = cheatsheets
    .map((elemento) => {
      return `
        <article class="cheatsheet-card">
            <a href="${elemento.link}">
            <img src="${elemento.icon}" alt="${elemento.name}"/>
                <h3>${elemento.name}</h3>
            </a>
        </article>

        `;
    })
    .join("");
  containerCheatsheet.innerHTML = cheatsheetsHTML;
}
