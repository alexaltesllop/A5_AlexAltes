function resaltar(seccio) {
  seccio.style.backgroundColor = "#1d3557";
  seccio.style.color = "#ffffff";
  seccio.querySelector(".ocult").style.display = "block";
}

function restaurar(seccio) {
  seccio.style.backgroundColor = "";
  seccio.style.color = "";
  seccio.querySelector(".ocult").style.display = "none";
}
