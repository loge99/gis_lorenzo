"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    for (let i = 0; i < Aufgabe06.data.length; i++) {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");
        //Image
        let productImg = document.createElement("img");
        productImg.src = Aufgabe06.data[i].img;
        productImg.alt = Aufgabe06.data[i].name;
        productImg.classList.add("product-img");
        productDiv.appendChild(productImg);
        //Price
        let productPrice = document.createElement("span");
        productPrice.innerText = Aufgabe06.data[i].price.toLocaleString("de-DE", { currency: "EUR", style: "currency" });
        productPrice.classList.add("product-price");
        productDiv.appendChild(productPrice);
        //Name
        let productName = document.createElement("span");
        productName.innerText = Aufgabe06.data[i].name;
        productName.classList.add("product-name");
        productDiv.appendChild(productName);
        //Description
        let productDesc = document.createElement("span");
        productDesc.innerText = Aufgabe06.data[i].description;
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
        productBtn.setAttribute("preis", Aufgabe06.data[i].price.toString());
        document.getElementById(Aufgabe06.data[i].category + "-content")?.appendChild(productDiv);
    }
    let warenzahlzaehler = 0;
    let anzahl = document.createElement("p");
    anzahl.setAttribute("id", "artikelzahlzaehler");
    let preis = 0;
    document.getElementById("hidetische")?.addEventListener("click", hidecategorytische);
    document.getElementById("hidestühle")?.addEventListener("click", hidecategorystühle);
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
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=script.js.map