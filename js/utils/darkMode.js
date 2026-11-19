export default function lightMode() {
  const btnLightTheme = document.querySelector(".btnLightMode");
  btnLightTheme.addEventListener("click", () => {
    document.body.classList.toggle("lightModeActive");
  });
}
