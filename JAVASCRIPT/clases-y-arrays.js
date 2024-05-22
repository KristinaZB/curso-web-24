// El objetivo es cambiar los divs de color
// Por un lado identificamos los divs y por otro lado los colores

const divs = document.getElementsByClassName("color");

const colores = ["#9B00FF", "#00FEA6","#FF0EF0", "#03FF25"];

divs[0].style.backgroundColor = colores[0];
divs[1].style.backgroundColor = colores[1];
divs[2].style.backgroundColor = colores[2];
divs[3].style.backgroundColor = colores[3];