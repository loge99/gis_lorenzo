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
        /*   //Category
          let productCategory: HTMLSpanElement = document.createElement("span");
          productCategory.innerText = data [i].category;
          productCategory.classList.add("product-category");
          productDiv.appendChild(productCategory); */
        //Button
        let productBtn = document.createElement("button");
        productBtn.innerText = "In die Tüte";
        productBtn.classList.add("product-btn");
        productDiv.appendChild(productBtn);
        productBtn.addEventListener("click", zaehler.bind(Prüfungsaufgabe.data[i]));
        /* productBtn.addEventListener("click", dummytest.bind(data[i]));
        productBtn.addEventListener("click", testtest.bind(data[i])); */
        productBtn.setAttribute("preis", Prüfungsaufgabe.data[i].price.toString());
        document.getElementById(Prüfungsaufgabe.data[i].category + "-content")?.appendChild(productDiv);
        // testtest.bind(data[i])();
    }
    let warenzahlzaehler = 0;
    let anzahl = document.createElement("p");
    //anzahl.setAttribute("id", "artikelzahlzaehler");
    let preis = 0;
    let pricezahl = document.createElement("p");
    function zaehler(_event) {
        warenzahlzaehler++;
        console.log(warenzahlzaehler);
        anzahl.innerHTML = warenzahlzaehler.toString();
        preis += this.price;
        console.log(preis + "€");
        pricezahl.innerHTML = preis.toString() + "€";
        let bild = document.createElement("img");
        bild.src = this.img;
        bild.id = "bildgroesse";
        document.getElementById("shoppingc")?.appendChild(bild);
        document.getElementById("number")?.appendChild(anzahl);
        document.getElementById("price")?.appendChild(pricezahl);
    }
    /* let lokal: Product[] = new Array;
    function dummytest(this: Product, _event: Event): void {


        lokal.push(this); //push this (das angeklickte) in array und das wird in den lokal storage gepackt
        localStorage.setItem("storagespeicher", JSON.stringify(lokal));
    } */
    /* function testtest(this: Product): void {
        let getBild: Product[] = JSON.parse((localStorage.getItem("storagespeicher")!)); */
    //for (let index: number = 0; index < getBild.length; index++) {
    //  }
})(Prüfungsaufgabe || (Prüfungsaufgabe = {}));
document.getElementById("hidetische")?.addEventListener("click", hidecategorytische);
document.getElementById("showtische")?.addEventListener("click", showcategorytische);
document.getElementById("hidestühle")?.addEventListener("click", hidecategorystühle);
document.getElementById("showstühle")?.addEventListener("click", showcategorystühle);
function hidecategorytische(_event) {
    document.getElementById("Tische-content").style.display = "none";
    document.getElementById("hidetische").style.display = "none";
}
function hidecategorystühle(_event) {
    document.getElementById("Stühle-content").style.display = "none";
    document.getElementById("hidestühle").style.display = "none";
}
function showcategorystühle(_event) {
    document.getElementById("Stühle-content").style.display = "flex";
}
function showcategorytische(_event) {
    document.getElementById("Tische-content").style.display = "flex";
}
//# sourceMappingURL=script.js.map