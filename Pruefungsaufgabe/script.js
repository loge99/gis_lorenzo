"use strict";
var Pruefungsaufgabe;
(function (Pruefungsaufgabe) {
    async function erhalteJSON(_url) {
        // "_url" ist nur name
        // Hover"Request info" __ |__ = welche datentypen kann es sein    
        // -Erschaffe Funktion erhalteJSON, arbeitet während was anderes schon passiert, weil sie ladezeit braucht
        //url ist name, daten.json wir unten mit 
        let response; //-Response ist vom Type Response deklarieren
        let datenJson; //-"datenJson" ist vom Type String deklareiren, 
        response = await fetch(_url); //wenn was in _url ist ( hier daten.json) dann packkt er das in die response, (versprechen)
        console.log(response);
        //await unterbricht die funktion, weils wartet "await"
        datenJson = await response.text(); //bevor datenjson angelegt wird wartet man auf response, und .text macht das ganze  string
        pageBuild(JSON.parse(datenJson)); //wird datenjson json zu array
        console.log(JSON.parse(datenJson));
    }
    erhalteJSON("daten.json"); //-Gib der Funktion den parameter daten.json mit ; aufruf der funktion
    function pageBuild(_datenArray) {
        for (let i = 0; i < _datenArray.length; i++) {
            let productDiv = document.createElement("div");
            productDiv.classList.add("product");
            //Name
            let productName = document.createElement("span");
            productName.innerText = _datenArray[i].name;
            productName.classList.add("product-name");
            productDiv.appendChild(productName);
            //Image
            let productImg = document.createElement("img");
            productImg.src = _datenArray[i].img;
            productImg.alt = _datenArray[i].name;
            productImg.classList.add("product-img");
            productDiv.appendChild(productImg);
            //Description
            let productDesc = document.createElement("span");
            productDesc.innerText = _datenArray[i].description;
            productDesc.classList.add("product-desc");
            productDiv.appendChild(productDesc);
            //Price
            let productPrice = document.createElement("span");
            productPrice.innerText = _datenArray[i].price.toLocaleString("de-DE", { currency: "EUR", style: "currency" });
            productPrice.classList.add("product-price");
            productDiv.appendChild(productPrice);
            //Button
            let productBtn = document.createElement("button");
            productBtn.innerText = "In die Tüte";
            productBtn.classList.add("product-btn");
            productDiv.appendChild(productBtn);
            productBtn.addEventListener("click", zaehler.bind(_datenArray[i])); //Ermöglicht zugriff auf datenarray an stelle in FUnktion zähler
            productBtn.addEventListener("click", pushLocal.bind(_datenArray[i])); //.bind ermöglicht dass man auf; 
            productBtn.setAttribute("preis", _datenArray[i].price.toString());
            document.getElementById(_datenArray[i].category + "-content")?.appendChild(productDiv);
        }
    }
    let warenZahlZaehler = 0; //Zähler für Shopping Cart: Artikel
    let anzahl = document.createElement("p"); //ab damit in die shop.html
    let preis = 0; //Zähler für Shopping Cart: Preis
    let priceZahl = document.createElement("p"); //ab damit in die shop.html
    function zaehler(_event) {
        warenZahlZaehler++;
        console.log(warenZahlZaehler);
        anzahl.innerHTML = warenZahlZaehler.toString();
        preis += this.price; //-
        console.log(preis + "€");
        priceZahl.innerHTML = preis.toString() + "€";
        let bild = document.createElement("img");
        bild.src = this.img;
        bild.id = "bildgroesse"; //Für CSS
        document.getElementById("shoppingc")?.appendChild(bild);
        document.getElementById("number")?.appendChild(anzahl);
        document.getElementById("price")?.appendChild(priceZahl);
    }
    let lokal = new Array; //Erstellt variable vom typ "produkt Array"; "= new Array" braucht man ned
    function pushLocal(_event) {
        lokal.push(this); //inhalt von this wird in array lokal gepusht ; this ist der artikel der gerade geklickt wurde
        localStorage.setItem("storagespeicher", JSON.stringify(lokal)); //speichert als string weil an den local storage nur ein string übergeben werden kann
        //Storage speicher is key
        //json.stringify is value
    }
    document.getElementById("hideeis")?.addEventListener("click", hideKategorieEis); //l.98-118: Hide and Show von "Bezahlen", "Nächste"
    document.getElementById("hidetoppings")?.addEventListener("click", hideKategorieToppings);
    document.getElementById("hidebecher")?.addEventListener("click", hideKategorieBecher);
    document.getElementById("showall")?.addEventListener("click", showAllKategorien);
    function hideKategorieEis(_event) {
        document.getElementById("eis-content").style.display = "none";
        document.getElementById("hideeis").style.display = "none";
    }
    function hideKategorieToppings(_event) {
        document.getElementById("toppings-content").style.display = "none";
        document.getElementById("hidetoppings").style.display = "none";
    }
    function hideKategorieBecher(_event) {
        document.getElementById("behälter-content").style.display = "none";
        document.getElementById("hidebecher").style.display = "none";
    }
    function showAllKategorien(_event) {
        document.getElementById("eis-content").style.display = "flex";
        document.getElementById("toppings-content").style.display = "flex";
        document.getElementById("behälter-content").style.display = "flex";
    }
})(Pruefungsaufgabe || (Pruefungsaufgabe = {}));
//# sourceMappingURL=script.js.map