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
