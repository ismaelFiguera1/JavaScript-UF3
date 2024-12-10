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
/* toogle es un interruptor. Si te una classe la elimina, si no la te, la posa */

console.log("*****toggle*****");

console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
console.log($card.classList.contains("opacity-20"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("rotate-135", "sepia");

/* Com interactuar amb el contingut contextual i HTML d'un document */

const $caption2 = document.querySelector(".caption-2");

/* innertext i textcontent NO respecta indentacions ni tabulacions, i tampoc no interpreta els tags HTML. No es estandard */

$caption2.innerText = "Es la caption 2";
/* propietat estandard */
$caption2.textContent = "es la caption 22";
/* Si volem que s'interpretin els tags HTML, hem de utilitzar innerHTML */
$caption2.innerHTML = "es la <b>caption</b> 2";

let text = `<p>
El model d'Objectes del Document (<b><i>DOM - Document Object Model</i></b>)és un API per a documents HTML i XML.
</p>
<p>
Facilita una representació estructural del document, permetent modificar el seu contingut i presentació visual mitjançant codi JS
</p>
<p>
<mark> El DOM no és part de l'especificació de JavaScript, és una API per als navegadors</mark>
</p>`;

const $textDOM = document.querySelector("#outerHTML");

/* Aquesta propietat "inner text" no es estandard. Es va crear per al navegaror IE */

$textDOM.innerText = text;

/* Respecte les indentacions i les tabulacions, pero no interpreta els tags HTML */

/* La propietat estandard textContent:
    - No respecta ni indentacions ni tabulacions
    - No interpreta codi HTML
*/

$textDOM.textContent = text;

/* innerHTML s'interpreten els tags HTML */

$textDOM.innerHTML = text;

/* 
    El outerHTML elimina el que hi ha al html i hi sobreescriu el que hi ha al javascrpt
    El innerHTML fica el que hi ha al javascrip DINTRE dels tags del codi HTML
*/

$textDOM.outerHTML = text;

/* DOM Traversing */
console.log("DOM Traversing");

const $cards = document.querySelector(".cards");

console.log($cards);

/* El children ens retorna tots els fills */

console.log($cards.children);

/* Ho podem tractar com un array i ens retorna el 3r */

console.log($cards.children[2]);

/* Cridem al element pare del codi html */

console.log($cards.parentElement);

/* Li cridem al seu primer fill */

console.log($cards.firstElementChild);

/* Li cridem al seu ultim fill */

console.log($cards.lastElementChild);

/* Accedim als nodes */

/* El primer fill node es un return */

console.log($cards.firstChild);

console.log($cards.childNodes);

console.log($cards.previousElementSibling);

console.log($cards.previousSibling);

/* Crear i afegir dinamicament elements i fragments */

/* Crear un element (card) */

const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptiontext = document.createTextNode("imatge6");

$cards.appendChild($figure);

/* Ara que ja tenim la nova figure, afegirem interactivament etiquetes al DOM */

/* Configurem la imatge */

$img.setAttribute("alt", "random6");
$img.setAttribute("src", "https://picsum.photos/200/200/?random=6");

/* Afegir la <img> dins del figure */

$figure.appendChild($img);

/* Ara toca afegir el node text $figcaptiontext a la $figcaption */

$figcaption.appendChild($figcaptiontext);

/* Afegin el figcaption dins del $figure */

$figure.appendChild($figcaption);

/* Afegim la classe card a figure */

$figure.classList.add("card");

/* Segona opcio menys estructurada que accelera el process */

const $figure2 = document.createElement("figure");

$figure2.innerHTML = `        <img
          src="https://picsum.photos/200/200/?random=7"
          alt=""
          class="rotate-45"
        />
        <figcaption class="caption-2">imatge7</figcaption>`;

$figure2.classList.add("card");

$cards.appendChild($figure2);

/* Que passa si volem crear molts nodes de cop */
/* Cada cop que fem un appendChild() te un cost considerable al document HTML. Aixo pot fer que si afegim centenars de tags HTML la pagina quedi bloquejada */

/* ESTRATEGIA: Utilitzarem fragments */

/* Volem crear molts nodes de cop */

/* Primera opcio nooptimitzada */

const estacions = ["Primavera", "Estiu", "Hivern", "Tardor"];
const $ul = document.createElement("ul");
document.write("<h3>Estacions de l'any</h3>");
document.body.appendChild($ul);
estacions.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

/* Segona opcio no optimitzada */
const continents = ["Africa", "Asia", "America", "Europa", "Oceania"];
const $ul2 = document.createElement("ul");
document.write("<h3>Continents del mon</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continents.forEach((el) => {
  $ul2.innerHTML += `<li>${el}</li>`;
});

/* Tercera opcio Optimitzada */
/* Es tracta de crear fragments del DOM i treballar amb aquests fragments i al final afegirem aquest fragment al DOM */

const mesos = [
  "Gener",
  "Febrer",
  "Març",
  "Abril",
  "Maig",
  "Juny",
  "Juliol",
  "Agost",
  "Septembre",
  "Octubre",
  "Novembre",
  "Desembre",
];

/*
console.log($cards.);

console.log($cards.);

console.log($cards.);

console.log($cards.);

console.log($cards.);*/
