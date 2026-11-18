export default function menu() {
  const burguer = document.querySelector(".hamburger");
  const listaMenu = document.querySelector(".nav-list");
  const enlacesMenu = document.querySelectorAll(".nav-list a");

  burguer.addEventListener("click", () => {
    listaMenu.classList.toggle("active");
    burguer.classList.toggle("active");
  });
  enlacesMenu.forEach((enlace) => {
    enlace.addEventListener("click", () => {
      burguer.classList.remove("active");
      listaMenu.classList.remove("active");
    });
  });
}
