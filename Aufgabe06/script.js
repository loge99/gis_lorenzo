"use strict";
function myFunction() {
    console.log("ich wurde geklickt");
}
document.querySelector(".test23").addEventListener("click", myFunction);
window.addEventListener("resize", function () {
    console.log(window.innerWidth + "x" + window.innerHeight);
});
window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    console.log(_event);
}
var Aufgabe05;
(function (Aufgabe05) {
    //Produkte erstellen >>> "Tische"
    const tisch1 = {
        bild: "images/Tische/Tisch1.png",
        preis: "100",
        titel: "Tisch 1",
        beschreibung: "Das ist eine Beschreibung."
    };
    const tisch2 = {
        bild: "images/Tische/Tisch2.jpg",
        preis: "200",
        titel: "Tisch 2",
        beschreibung: "Das ist eine Beschreibung."
    };
    const tisch3 = {
        bild: "images/Tische/Tisch3.jpg",
        preis: "300",
        titel: "Tisch 3",
        beschreibung: "Das ist eine Beschreibung."
    };
    const tisch4 = {
        bild: "images/Tische/Tisch4.jpg",
        preis: "400",
        titel: "Tisch 4",
        beschreibung: "Das ist eine Beschreibung."
    };
    const tisch5 = {
        bild: "images/Tische/Tisch5.png",
        preis: "500",
        titel: "Tisch 5",
        beschreibung: "Das ist eine Beschreibung."
    };
    const tisch6 = {
        bild: "images/Tische/Tisch6.jpg",
        preis: "600",
        titel: "Tisch 6",
        beschreibung: "Das ist eine Beschreibung."
    };
    //Produkte erstellen >>> "Stühle"
    const stuhl1 = {
        bild: "images/Stühle/Stuhl1.png",
        preis: "50",
        titel: "Stuhl 1",
        beschreibung: "Das ist eine Beschreibung."
    };
    const stuhl2 = {
        bild: "images/Stühle/Stuhl1.png",
        preis: "100",
        titel: "Stuhl 2",
        beschreibung: "Das ist eine Beschreibung."
    };
    const stuhl3 = {
        bild: "images/Stühle/Stuhl1.png",
        preis: "150",
        titel: "Stuhl 3",
        beschreibung: "Das ist eine Beschreibung."
    };
    const stuhl4 = {
        bild: "images/Stühle/Stuhl1.png",
        preis: "200",
        titel: "Stuhl 4",
        beschreibung: "Das ist eine Beschreibung."
    };
    const stuhl5 = {
        bild: "images/Stühle/Stuhl1.png",
        preis: "250",
        titel: "Stuhl 5",
        beschreibung: "Das ist eine Beschreibung."
    };
    const stuhl6 = {
        bild: "images/Stühle/Stuhl1.png",
        preis: "300",
        titel: "Stuhl 6",
        beschreibung: "Das ist eine Beschreibung."
    };
    // In Array speichern
    let artikelStühle = [stuhl1, stuhl2, stuhl3, stuhl4, stuhl5, stuhl6];
    let artikelTische = [tisch1, tisch2, tisch3, tisch4, tisch5, tisch6];
    //Klasse mit all Inhalt Tische
    let divinhalttisch = document.createElement("div");
    divinhalttisch.setAttribute("class", "main-tische");
    //Klasse erschaffen
    let Tischediv = document.createElement("div");
    Tischediv.setAttribute("class", "flex-container");
    divinhalttisch.appendChild(Tischediv);
    //Geht mit Schleife alle Produkte durch
    for (let i = 0; i < artikelTische.length; i++) {
        //Jeder neue Artikel wird in Klasse artikel gespeichern
        let divElement = document.createElement("div");
        divElement.setAttribute("class", "flex-item");
        Tischediv.appendChild(divElement);
        //Bilder
        let bildElement = document.createElement("img");
        bildElement.setAttribute("src", artikelTische[i].bild);
        bildElement.setAttribute("class", "product-image");
        divElement.appendChild(bildElement);
        //Preis
        let preiselement = document.createElement("i");
        divElement.appendChild(preiselement);
        preiselement.innerHTML = artikelTische[i].preis;
        //Titel
        let titelElement = document.createElement("h3");
        divElement.appendChild(titelElement);
        titelElement.innerHTML = artikelTische[i].titel;
        //Beschreibung
        let beschreibungElement = document.createElement("p");
        divElement.appendChild(beschreibungElement);
        beschreibungElement.innerHTML = artikelTische[i].beschreibung;
        //Kaufen Button
        let buttonElement = document.createElement("button");
        buttonElement.setAttribute("class", "KaufenButtonClass");
        buttonElement.innerHTML = "Kaufen";
        divElement.appendChild(buttonElement);
    }
    //Den ganzen Inhalt oben in den html main Tag hinzufügen
    document.getElementById("main-tische")?.appendChild(divinhalttisch);
    //Klasse mit all Inhalt Stühle
    let divinhaltstuhl = document.createElement("div");
    divinhaltstuhl.setAttribute("class", "main-stühle");
    //Klasse erschaffen
    let Stühlediv = document.createElement("div");
    Stühlediv.setAttribute("class", "flex-container");
    divinhaltstuhl.appendChild(Stühlediv);
    for (let i = 0; i < artikelStühle.length; i++) {
        //Jeder neue Artikel wird in Klasse artikel gespeichern
        let divElement = document.createElement("div");
        divElement.setAttribute("class", "flex-item");
        Stühlediv.appendChild(divElement);
        //Bilder
        let bildElement = document.createElement("img");
        bildElement.setAttribute("src", artikelStühle[i].bild);
        bildElement.setAttribute("class", "product-image");
        divElement.appendChild(bildElement);
        //Preis
        let preiselement = document.createElement("i");
        divElement.appendChild(preiselement);
        preiselement.innerHTML = artikelStühle[i].preis;
        //Titel
        let titelElement = document.createElement("h3");
        divElement.appendChild(titelElement);
        titelElement.innerHTML = artikelStühle[i].titel;
        //Beschreibung
        let beschreibungElement = document.createElement("p");
        divElement.appendChild(beschreibungElement);
        beschreibungElement.innerHTML = artikelStühle[i].beschreibung;
        //Kaufen Button
        let buttonElement = document.createElement("button");
        buttonElement.setAttribute("class", "KaufenButtonClass");
        buttonElement.innerHTML = "Kaufen";
        divElement.appendChild(buttonElement);
    }
    //Den ganzen Inhalt oben in den html main Tag hinzufügen
    document.getElementById("main-stühle")?.appendChild(divinhaltstuhl);
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=script.js.map