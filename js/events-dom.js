function holaMon() {
  alert("Event cridat desde una funcio");
  console.log(event);
}

function holaMon1(nom = "desconegut") {
  alert(`Hola ${nom}`);
  console.log(event);
}

const $eventSemantic = document.querySelector("#event-semantic");
$eventSemantic.onclick = holaMon; //  Compte, holaMon va sense parentesis

//  Alternatives
//  Com una funcio anonima
$eventSemantic.onclick = function () {
  alert("Event cridat com una funcio anonima");
};

//  2 Amb arrowfunctions

$eventSemantic.onclick = () => alert("Event cridat com una arrowfunction");
/*  Com que el que s'executa de l'arrowfunction es sol una linea, no van les "{}"   */

const $eventMultiple = document.getElementById("event-multiple");

//  addEventListener es per executar diverser coses en la mateixa accio

$eventMultiple.addEventListener("click", holaMon);
$eventMultiple.addEventListener("click", () => {
  alert("Segon handler sobre el click");
});
$eventMultiple.addEventListener("click", () => {
  holaMon1("Ismael");
});
/*  
Compte, no es onclick sino en "click"
La crida de la funcio va sense parentesis
*/

$eventMultiple.addEventListener("dblclick", () => alert("doble click 3.0"));

const $eventDobleClick = document.getElementById("event-dblclick");

$eventDobleClick.addEventListener("dblclick", function () {
  alert("doble click 2.0");
});
