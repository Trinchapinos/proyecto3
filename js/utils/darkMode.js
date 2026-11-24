export default function lightMode() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("lightModeActive");
  }

  const btnLightTheme = document.querySelector(".btnLightMode");
  btnLightTheme.addEventListener("click", () => {
    document.body.classList.toggle("lightModeActive");
    const isLightActive = document.body.classList.contains("lightModeActive");
    localStorage.setItem("theme", isLightActive ? "light" : "dark");
  });
}
