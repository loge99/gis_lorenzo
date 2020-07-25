"use strict";
var Prüfungsaufgabe;
(function (Prüfungsaufgabe) {
    for (let i = 0; i < Prüfungsaufgabe.data.length; i++) {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");
        //Name
        let productName = document.createElement("span");
        productName.innerText = Prüfungsaufgabe.data[i].name;
        productName.classList.add("product-name");
        productDiv.appendChild(productName);
        //Image
        let productImg = document.createElement("img");
        productImg.src = Prüfungsaufgabe.data[i].img;
        productImg.alt = Prüfungsaufgabe.data[i].name;
        productImg.classList.add("product-img");
        productDiv.appendChild(productImg);
        //Description
        let productDesc = document.createElement("span");
        productDesc.innerText = Prüfungsaufgabe.data[i].description;
        productDesc.classList.add("product-desc");
        productDiv.appendChild(productDesc);
        //Price
        let productPrice = document.createElement("span");
        productPrice.innerText = Prüfungsaufgabe.data[i].price.toLocaleString("de-DE", { currency: "EUR", style: "currency" });
        productPrice.classList.add("product-price");
        productDiv.appendChild(productPrice);
        //Button
        let productBtn = document.createElement("button");
        productBtn.innerText = "In die Tüte";
        productBtn.classList.add("product-btn");
        productDiv.appendChild(productBtn);
        productBtn.addEventListener("click", zaehler.bind(Prüfungsaufgabe.data[i]));
        productBtn.addEventListener("click", pushLocal.bind(Prüfungsaufgabe.data[i]));
        productBtn.setAttribute("preis", Prüfungsaufgabe.data[i].price.toString());
        document.getElementById(Prüfungsaufgabe.data[i].category + "-content")?.appendChild(productDiv);
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
        lokal.push(this); //push this (das angeklickte) in array und das wird in den lokal storage gepackt
        localStorage.setItem("storagespeicher", JSON.stringify(lokal));
    }
})(Prüfungsaufgabe || (Prüfungsaufgabe = {}));
document.getElementById("hideeis")?.addEventListener("click", hideKategorieEis);
document.getElementById("showeis")?.addEventListener("click", showKategorieEis);
document.getElementById("hidetoppings")?.addEventListener("click", hideKategorieToppings);
document.getElementById("showtoppings")?.addEventListener("click", showKategorieToppings);
document.getElementById("hidetecher")?.addEventListener("click", hideKategorieBecher);
function hideKategorieEis(_event) {
    document.getElementById("eis-content").style.display = "none";
    document.getElementById("hideeis").style.display = "none";
}
function showKategorieEis(_event) {
    document.getElementById("eis-content").style.display = "flex";
}
function hideKategorieToppings(_event) {
    document.getElementById("toppings-content").style.display = "none";
    document.getElementById("hidetoppings").style.display = "none";
}
function showKategorieToppings(_event) {
    document.getElementById("toppings-content").style.display = "flex";
}
function hideKategorieBecher(_event) {
    document.getElementById("behälter-content").style.display = "none";
    document.getElementById("hidebecher").style.display = "none";
}
//# sourceMappingURL=script.js.map