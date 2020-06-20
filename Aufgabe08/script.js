"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    window.addEventListener("load", init);
    function init(_event) {
        buildProducts();
    }
    async function communicate(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
    }
    function buildProducts() {
        for (let i = 0; i < Aufgabe07.data.length; i++) {
            let productDiv = document.createElement("div");
            productDiv.classList.add("product");
            //Image
            let productImg = document.createElement("img");
            productImg.src = Aufgabe07.data[i].img;
            productImg.alt = Aufgabe07.data[i].name;
            productImg.classList.add("product-img");
            productDiv.appendChild(productImg);
            //Price
            let productPrice = document.createElement("span");
            productPrice.innerText = Aufgabe07.data[i].price.toLocaleString("de-DE", { currency: "EUR", style: "currency" });
            productPrice.classList.add("product-price");
            productDiv.appendChild(productPrice);
            //Name
            let productName = document.createElement("span");
            productName.innerText = Aufgabe07.data[i].name;
            productName.classList.add("product-name");
            productDiv.appendChild(productName);
            //Description
            let productDesc = document.createElement("span");
            productDesc.innerText = Aufgabe07.data[i].description;
            productDesc.classList.add("product-desc");
            productDiv.appendChild(productDesc);
            /*   //Category
              let productCategory: HTMLSpanElement = document.createElement("span");
              productCategory.innerText = data [i].category;
              productCategory.classList.add("product-category");
              productDiv.appendChild(productCategory); */
            //Button
            let productBtn = document.createElement("button");
            productBtn.innerText = "Buy";
            productBtn.classList.add("product-btn");
            productDiv.appendChild(productBtn);
            productBtn.addEventListener("click", zaehler);
            productBtn.setAttribute("preis", Aufgabe07.data[i].price.toString());
            document.getElementById(Aufgabe07.data[i].category + "-content")?.appendChild(productDiv);
        }
    }
    let warenzahlzaehler = 0;
    let anzahl = document.createElement("p");
    anzahl.setAttribute("id", "artikelzahlzaehler");
    let preis = 0;
    document.getElementById("hidetische")?.addEventListener("click", hidecategorytische);
    document.getElementById("hidetische")?.addEventListener("click", showcategorytische);
    document.getElementById("hidestühle")?.addEventListener("click", hidecategorystühle);
    document.getElementById("hidestühle")?.addEventListener("click", showcategorystühle);
    function zaehler(_event) {
        warenzahlzaehler++;
        console.log(warenzahlzaehler);
        anzahl.innerHTML = warenzahlzaehler.toString();
        preis += parseFloat(_event.target?.getAttribute("preis"));
        console.log(preis + "€");
        document.getElementById("add")?.appendChild(anzahl);
    }
    function hidecategorytische(_event) {
        document.getElementById("Tische-content").style.display = "none";
    }
    function hidecategorystühle(_event) {
        document.getElementById("Stühle-content").style.display = "none";
    }
    function showcategorystühle(_event) {
        document.getElementById("Stühle-content").style.display = "none";
    }
    function showcategorytische(_event) {
        document.getElementById("Stühle-content").style.display = "none";
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script.js.map