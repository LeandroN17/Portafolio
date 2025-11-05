// script.js
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que recargue la página

  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const mensaje = document.getElementById("mensaje");

  if (nombre && apellido && email && telefono) {
    mensaje.textContent = "✅ ¡Formulario enviado correctamente!";
    mensaje.style.color = "green";

    // Limpia el formulario después de unos segundos
    setTimeout(() => {
      document.getElementById("contactForm").reset();
      mensaje.textContent = "";
    }, 2500);
  } else {
    mensaje.textContent = "⚠️ Por favor, completa todos los campos.";
    mensaje.style.color = "red";
  }
});
