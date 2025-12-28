const menuHamburguer = document.getElementById("menu-hamburguer");
const menuItem = document.querySelector("nav li");
const links = document.querySelectorAll("nav li a");

// Abre / fecha menu
menuHamburguer.addEventListener("click", () => {
  menuItem.classList.toggle("ativo");
});

// Fecha o menu ao clicar em um link
links.forEach(link => {
  link.addEventListener("click", () => {
    menuItem.classList.remove("ativo");
  });
});
