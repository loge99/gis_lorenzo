"use strict";
var Prüfungsaufgabe;
(function (Prüfungsaufgabe) {
    let bestellung = JSON.parse((localStorage.getItem("storagespeicher")));
    console.log(bestellung);
    for (let i = 0; i < bestellung.length; i++) {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");
        //Name
        let productName = document.createElement("span");
        productName.innerText = bestellung[i].name;
        productName.classList.add("product-name");
        productDiv.appendChild(productName);
        //Image
        let productImg = document.createElement("img");
        productImg.src = bestellung[i].img;
        productImg.alt = bestellung[i].name;
        productImg.classList.add("product-img");
        productDiv.appendChild(productImg);
        document.getElementById("eis-content")?.appendChild(productDiv);
    }
})(Prüfungsaufgabe || (Prüfungsaufgabe = {}));
//# sourceMappingURL=haendlerscript.js.map