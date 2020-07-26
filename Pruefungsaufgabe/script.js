"use strict";
var Pruefungsaufgabe;
(function (Pruefungsaufgabe) {
    async function erhalteJSON(_url) {
        let response;
        let datenJson;
        response = await fetch(_url);
        datenJson = await response.text();
        pageBuild(JSON.parse(datenJson));
    }
    erhalteJSON("daten.json");
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
            productBtn.addEventListener("click", zaehler.bind(_datenArray[i]));
            productBtn.addEventListener("click", pushLocal.bind(_datenArray[i]));
            productBtn.setAttribute("preis", _datenArray[i].price.toString());
            document.getElementById(_datenArray[i].category + "-content")?.appendChild(productDiv);
        }
    }
    let warenZahlZaehler = 0;
    let anzahl = document.createElement("p");
    let preis = 0;
    let priceZahl = document.createElement("p");
    function zaehler(_event) {
        warenZahlZaehler++;
        console.log(warenZahlZaehler);
        anzahl.innerHTML = warenZahlZaehler.toString();
        preis += this.price;
        console.log(preis + "€");
        priceZahl.innerHTML = preis.toString() + "€";
        let bild = document.createElement("img");
        bild.src = this.img;
        bild.id = "bildgroesse";
        document.getElementById("shoppingc")?.appendChild(bild);
        document.getElementById("number")?.appendChild(anzahl);
        document.getElementById("price")?.appendChild(priceZahl);
    }
    let lokal = new Array;
    function pushLocal(_event) {
        lokal.push(this); //push this (das angeklickte) in array und wird in lokal storage gepackt
        localStorage.setItem("storagespeicher", JSON.stringify(lokal));
    }
    document.getElementById("hideeis")?.addEventListener("click", hideKategorieEis);
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