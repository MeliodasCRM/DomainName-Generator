/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let art = ["the", "a", "my", "this"];
  let adj = ["fast", "creative", "original", "strong"];
  let name = ["dragon", "star", "fish", "computer"];
  let domain = [".net", ".com", ".io", ".es"];

  let resultado = "";

  for (let i = 0; i < art.length; i++) {
    for (let i2 = 0; i2 < adj.length; i2++) {
      for (let i3 = 0; i3 < name.length; i3++) {
        for (let i4 = 0; i4 < domain.length; i4++) {
          resultado += art[i] + adj[i2] + name[i3] + domain[i4] + "<br>";
        }
      }
    }
  }

  document.getElementById("domaingenerator").innerHTML = resultado;
};
