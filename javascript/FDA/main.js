const btnTouchMe = document.getElementById("btnTouchMe");
btnTouchMe.textContent = "Hola";

const labels = document.querySelectorAll("label");
for (const label of labels) {
  label.textContent = "Adios";
}

const cosita = document.getElementsByClassName("cosita");
cosita[0].textContent = "Soy cosita";

