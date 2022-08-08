let elem = document.getElementById("titulo");

elem.classList.add("destacado");
elem.classList.remove("favorito");

let elem2 = document.querySelector("#section-header");
elem2.setAttribute("class", "favorito");

let boton = document.querySelector("#cambiador");

//Evento boton cambiador
document
  .querySelector("#cambiador")
  .addEventListener("click", intercambiarClase);
function intercambiarClase() {
  document.querySelector("div").classList.toggle("oculto");
  if (boton.value === "Mostrar Div") boton.setAttribute("name", "Ocultar Div");
  else boton.setAttribute = ("name", "Mostrar Div");
}
