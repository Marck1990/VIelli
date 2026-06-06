const formularioCiudadano = document.querySelector("#formularioCiudadano");
const mensajeFormulario = document.querySelector("#mensajeFormulario");

formularioCiudadano.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.querySelector("#nombre").value.trim();
  const localidad = document.querySelector("#localidad").value.trim();
  const tema = document.querySelector("#tema").value.trim();
  const email = document.querySelector("#email").value.trim();
  const mensaje = document.querySelector("#mensaje").value.trim();

  if (nombre === "" || localidad === "" || tema === "" || email === "" || mensaje === "") {
    mensajeFormulario.textContent = "Por favor, completá todos los campos.";
    mensajeFormulario.style.color = "#9b1c1c";
    return;
  }

  mensajeFormulario.textContent = "Tu planteo fue registrado correctamente. Este formulario puede conectarse luego a un correo real.";
  mensajeFormulario.style.color = "#092348";

  formularioCiudadano.reset();
});