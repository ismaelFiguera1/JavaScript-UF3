/*  metodes per capturar elements   */

console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nom"));
console.log(document.getElementById("menu"));

/*queden substituides per*/

console.log("Utilitzant query selector");
console.log(document.querySelector(".cards"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelector("#gestio-dom"));

/*  recorrer una llista de nodes    */

console.log("Recorrem una llista de nodes");

document.querySelectorAll("a").forEach((el) => console.log(el));

console.log("imprimim els nodes classe cards");

console.log(document.querySelectorAll(".card"));

console.log("Seleccionem un element de la llista");

console.log(document.querySelectorAll(".card")[2]);

console.log(document.querySelectorAll("#menu li"));

/*
Attributes i data-attributes

Els data attributes son atribust propis que nosaltres podem afegir a les etiquetes html. 
Nomes cal afegir un atribut que comenci per "data-" a continuacio concatenarem el nom de l'atribut

Hi ha 2 formes d'accedir als attributs
*/

console.log("*****Attributes i data-attributes*****");

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

/*  La ntacio amb "." retorna tot el que te href en temps de execucio i amb notacio getAttribute nomes retorna el contingut que te href en temps de execucio.   */
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

/*  MODIFICAR O AFEGIR VALORS ALS ATRIBUTS  */
document.documentElement.lang = "es";
document.documentElement.setAttribute = ("lang", "eng");

/* posar a la variable que te una variable del dom un $ al davant */
/* podem assignar la varable amb let o const */

const $linkDom = document.querySelector("*.link-dom");
$linkDom.setAttribute("rel", "noopener");
$linkDom.setAttribute("href", "https://www.google.com");

/* existeix l'atribut */

console.log($linkDom.hasAttribute("rel"));

/* esborrar atribut */

$linkDom.removeAttribute("rel");
console.log($linkDom.hasAttribute("rel"));

/* data-atributtes */

console.log($linkDom.getAttribute("data-descrption"));

/* tots els data-atributtes s'enmagatzemen en un mapa anomenat "dataSet" */

console.log($linkDom.dataset);

/* com gestionem els data-atributtes */

console.log($linkDom.dataset.descrption);

$linkDom.setAttribute("data-descrption", "model d'objecte del document");

console.log($linkDom.dataset.descrption);

$linkDom.dataset.descrption = "Nova Descripcio";

console.log($linkDom.dataset.descrption);

console.log($linkDom.hasAttribute("data-descrption"));

/* Estils CSS */

console.log($linkDom.getAttribute("style"));

console.log($linkDom.style);

console.log($linkDom.style.backgroundColor);

console.log(window.getComputedStyle($linkDom).backgroundColor);

console.log(
  window.getComputedStyle($linkDom).getPropertyValue("background-Color")
);

/* compte amb la sintaxi camel code.
En CSS s'ecriu backgroud-color o accedint amb el " . " utilitza notacio camel code */

console.log(window.getComputedStyle($linkDom));

/* variables css */

console.log("*****Variables css*****");

const $html = document.documentElement,
  $body = document.body;

let varPrimaryColor =
  getComputedStyle($html).getPropertyValue("--color-primary");

varSecondaryColor =
  getComputedStyle($html).getPropertyValue("--color-secondary");

console.log(varPrimaryColor, varSecondaryColor);
/*
$body.style.backgroundColor = varSecondaryColor;

$html.style.setProperty("--color-primary", "yellow");

varPrimaryColor = getComputedStyle($html).getPropertyValue("--color-primary");

$body.style.setProperty("--color-primary", varPrimaryColor);
*/

const $card = document.querySelector(".card");

console.log($card);

console.log($card.className);

console.log($card.classList);

/* toggle */
