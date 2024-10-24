/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let generatefrase = () => {
  let subjecte = [
    "Sa padrina",
    "Es conco",
    "Es ca",
    "Es moix",
    "Es peixater",
    "Sa Madona"
  ];
  let accio = [
    "m'ha tirat",
    "m'ha d'aixonat",
    "m'ha rapinyat",
    "m'ha perdut",
    "m'ha mossegat"
  ];
  let esque = ["sa cartera", "sa mà", "es d'allonses", "ses claus", "sa cara"];
  let aon = [
    "p'es nas",
    "per sa finestra",
    "a sa riera",
    "p'es carrer",
    "a sa tenda"
  ];

  let subjecteIndex = Math.floor(Math.random() * subjecte.length);
  let accioIndex = Math.floor(Math.random() * accio.length);
  let esqueIndex = Math.floor(Math.random() * esque.length);
  let aonIndex = Math.floor(Math.random() * aon.length);

  return (
    subjecte[subjecteIndex] +
    " " +
    accio[accioIndex] +
    " " +
    esque[esqueIndex] +
    " " +
    aon[aonIndex]
  );
};
window.onload = () => {
  //write your code here

  document.querySelector("#frase").innerHTML = generatefrase();
  console.log("Hello Rigo from the console!");
};
