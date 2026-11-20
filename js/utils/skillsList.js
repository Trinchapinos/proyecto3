import { skills } from "../data/skills.js";

export default function skillsList() {
  const skillsContainer = document.querySelector("#skills-list");
  const skillsDominadas = skills.filter(
    (estadoHabilidad) => estadoHabilidad.state === "dominada",
  );
}
