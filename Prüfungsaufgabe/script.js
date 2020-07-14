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
        productBtn.addEventListener("click", zaehler);
        productBtn.setAttribute("preis", Prüfungsaufgabe.data[i].price.toString());
        document.getElementById(Prüfungsaufgabe.data[i].category + "-content")?.appendChild(productDiv);
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
        preis += parseFloat(_event.target?.getAttribute("preis"));
        console.log(preis + "€");
        pricezahl.innerHTML = preis.toString();
        document.getElementById("number")?.appendChild(anzahl);
        document.getElementById("price")?.appendChild(pricezahl);
    }
    document.getElementById("hidetische")?.addEventListener("click", hidecategorytische);
    document.getElementById("showtische")?.addEventListener("click", showcategorytische);
    document.getElementById("hidestühle")?.addEventListener("click", hidecategorystühle);
    //document.getElementById("hidestühle")?.addEventListener("click", showcategorystühle);
    function hidecategorytische(_event) {
        document.getElementById("Tische-content").style.display = "none";
    }
    function hidecategorystühle(_event) {
        document.getElementById("Stühle-content").style.display = "none";
    }
    /* function showcategorystühle(_event: Event): void {
        (<HTMLElement>document.getElementById("Stühle-content")).style.display = "inline-grid";
    } */
    function showcategorytische(_event) {
        document.getElementById("Tische-content").style.display = "flex";
    }
})(Prüfungsaufgabe || (Prüfungsaufgabe = {}));
//# sourceMappingURL=script.js.map