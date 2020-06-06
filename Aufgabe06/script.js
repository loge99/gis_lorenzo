"use strict";
/* function myFunction() {
    console.log("ich wurde geklickt");
}
document.querySelector(".test23").addEventListener("click", myFunction);




window.addEventListener("load", handleLoad);

function handleLoad(_event: Event): void {
    console.log();
}
 */
var Aufgabe05;
(function (Aufgabe05) {
    for (let i = 0; i < Aufgabe05.data.length; i++) {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");
        //Image
        let productImg = document.createElement("img");
        productImg.src = Aufgabe05.data[i].img;
        productImg.alt = Aufgabe05.data[i].name;
        productImg.classList.add("product-img");
        productDiv.appendChild(productImg);
        //Price
        let productPrice = document.createElement("span");
        productPrice.innerText = Aufgabe05.data[i].price.toLocaleString("de-DE", { currency: "EUR", style: "currency" });
        productPrice.classList.add("product-price");
        productDiv.appendChild(productPrice);
        //Name
        let productName = document.createElement("span");
        productName.innerText = Aufgabe05.data[i].name;
        productName.classList.add("product-name");
        productDiv.appendChild(productName);
        //Desciption
        let productDescription = document.createElement("span");
        productDescription.innerText = Aufgabe05.data[i].description;
        productDescription.classList.add("product-description");
        productDiv.appendChild(productDescription);
        /*   //Category
          let productCategory: HTMLSpanElement = document.createElement("span");
          productCategory.innerText = data [i].category;
          productCategory.classList.add("product-category");
          productDiv.appendChild(productCategory); */
        //Button
        let productBtn = document.createElement("button");
        productBtn.innerText = ("Kaufen");
        productBtn.classList.add("product-btn");
        productDiv.appendChild(productBtn);
        document.getElementById(Aufgabe05.data[i].category + "-content")?.appendChild(productDiv);
    }
    let einkaufswagenzahl = document.createElement("p");
    einkaufswagenzahl.setAttribute("id", "number");
    einkaufswagenzahl.innerHTML = "0";
    //divElement.appendChild(buttonElement);
    einkaufswagenzahl.addEventListener("click", function () {
        einkaufswagenzahl.value = parseInt(einkaufswagenzahl.value) + 1;
        console.log("ich wurde geklickt");
    });
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=script.js.map