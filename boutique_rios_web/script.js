// Año automático en el pie de página
document.getElementById("anio").textContent = new Date().getFullYear();

// Menú desplegable para teléfonos y pantallas pequeñas
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  const abierto = menu.classList.toggle("abierto");
  menuToggle.setAttribute("aria-expanded", abierto ? "true" : "false");
  menuToggle.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
  menuToggle.textContent = abierto ? "×" : "☰";
});

// Cerrar el menú después de elegir una sección
menu.querySelectorAll("a").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    menu.classList.remove("abierto");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    menuToggle.textContent = "☰";
  });
});
