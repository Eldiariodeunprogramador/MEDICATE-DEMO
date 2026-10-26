// Menú accesible para pantallas pequeñas y validación demostrativa de formularios.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación");
    menuButton.textContent = isOpen ? "×" : "☰";
  });
}

document.querySelectorAll(".demo-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = form.querySelector(".form-message");
    if (message) {
      message.textContent = "¡Gracias! El formulario funciona visualmente. Para recibir solicitudes reales, conecta un backend.";
    }
    form.reset();
  });
});

const newsletter = document.querySelector("#newsletter-form");
if (newsletter) {
  newsletter.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("¡Gracias por suscribirte! Esta es una demostración; no se guardó tu correo.");
    newsletter.reset();
  });
}

// Evita seleccionar fechas anteriores al día actual en el formulario de citas.
const dateInput = document.querySelector("#fecha");
if (dateInput) {
  const today = new Date();
  const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString().slice(0, 10);
  dateInput.min = localDate;
}
