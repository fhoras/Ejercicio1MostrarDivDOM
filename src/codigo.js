let elem = document.getElementById("titulo");

elem.classList.add("destacado");
elem.classList.remove("favorito");

let elem2 = document.querySelector("#section-header");
elem2.setAttribute("class", "favorito");

let boton = document.querySelector("#cambiador");

//Evento boton cambiador
boton.addEventListener("click", intercambiarClase);

function intercambiarClase() {
  document.querySelector("div").classList.toggle("oculto");
  if (boton.innerHTML === "Mostrar Div") {
    boton.innerHTML = "Ocultar Div";
  } else {
    boton.innerHTML = "Mostrar Div";
  }
}
