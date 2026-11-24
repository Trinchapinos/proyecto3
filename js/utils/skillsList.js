import { skills } from "../data/skills.js";

export default function skillsList() {
  const skillsContainer = document.querySelector("#skills-list");
  const skillsDominadas = skills.filter(
    (estadoHabilidad) => estadoHabilidad.state === "dominada",
  );
  const skillsHTML = skillsDominadas.map((skill) => {
    const tagsHTML = skill.tags
      .map((tag) => {
        return `<span class="skill-tag">${tag}</span>`;
      })
      .join("");
    return `
    <article class="skill-card">
          <div class="skill-header">
            <img src="${skill.icon}" alt="${skill.name}">
            <h3>${skill.name}</h3>
          </div>
            <ul>
              <li>${skill.level}</li>
              <li>${skill.description}</li>
            </ul>
            <div class="skill-tags">${tagsHTML}</div>
    </article>
    `;
  });
  skillsContainer.innerHTML = skillsHTML.join("");
}
