//NOTELIST

//Jeg deklarerer en variabel (const) og tildeler den en key/identifyer (nodelist) Herefter bruger jeg en metode, der går ind i mit dokument og finder alle mine paragraffer.

const nodelist = document.querySelectorAll("p");

//Herefter finder jeg, vha en metode, det ID i min HTML, der hedder "hej". Her indsætter jeg en string efterfulgt (+) af min variabel "nodelist". Jeg vil gerne have den til at finde 2. paragraf i mit dokument. Der gør jeg ved at indsætte indexet på den ([1]), hvilket er den eneste måde jeg kan tilgå en et nodelist-element.

document.getElementById("hej").innerHTML =
  "Den anden paragraf i min HTML er: " + nodelist[1].innerHTML;

//Nodelist length

let list = document.getElementById("nodelist");
const number = list.getElementsByTagName("p");

document.getElementById("nodelength").innerHTML =
  "Paragraffer i denne collection: " + number.length;

function changenodes() {
  for (let i = 0; i < number.length; i++) {
    number[i].style.color = "green";
  }
}

//HTMLCOLLECTION

//Et HTMLCollection object er ligeldes en liste over HTML-elementer. Jeg deklarerer jeg først en variabel (collection), der sørger for at den kun rammer de paragraffer der ligger i den section, der hedder htmlcollection.

let collection = document.getElementById("htmlcollection");

const htmlcollection = collection.getElementsByTagName("p");

document.getElementById("farvel").innerHTML =
  "Den tredje paragraf i mit dokument er: " + htmlcollection[2].innerHTML;

//LENGTH
//For at finde et antal i en collection, plusser jeg min string med min variabel efterfulgt af en property: "length".

document.getElementById("length").innerHTML =
  "Paragraffer i denne collection: " + htmlcollection.length;

//Jeg kan bruge længden til at loope mig igennem elementerne i collectionen. Jeg opretter en funktion med en "for"-loop, hvor jeg definerer at hvis 0 er mindre end antallet af p'er, som i dette tilfælde er 5, skal mine p'er farves blå.

function change() {
  for (let i = 0; i < htmlcollection.length; i++) {
    htmlcollection[i].style.color = "blue";
  }
}
