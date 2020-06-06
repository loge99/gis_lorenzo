/* function myFunction() {
    console.log("ich wurde geklickt");
}
document.querySelector(".test23").addEventListener("click", myFunction);




window.addEventListener("load", handleLoad);

function handleLoad(_event: Event): void {
    console.log();
}
 */
namespace Aufgabe05 {


    for (let i: number = 0; i < data.length; i++) {
        let productDiv: HTMLDivElement = document.createElement("div");
        productDiv.classList.add("product");


        //Image
        let productImg: HTMLImageElement = document.createElement("img");
        productImg.src = data[i].img;
        productImg.alt = data[i].name;
        productImg.classList.add("product-img");
        productDiv.appendChild(productImg);

        //Price
        let productPrice: HTMLSpanElement = document.createElement("span");
        productPrice.innerText = data[i].price.toLocaleString("de-DE", { currency: "EUR", style: "currency" });
        productPrice.classList.add("product-price");
        productDiv.appendChild(productPrice);

        //Name
        let productName: HTMLSpanElement = document.createElement("span");
        productName.innerText = data[i].name;
        productName.classList.add("product-name");
        productDiv.appendChild(productName);

        //Desciption
        let productDescription: HTMLSpanElement = document.createElement("span");
        productDescription.innerText = data[i].description;
        productDescription.classList.add("product-description");
        productDiv.appendChild(productDescription);

        /*   //Category
          let productCategory: HTMLSpanElement = document.createElement("span");
          productCategory.innerText = data [i].category;
          productCategory.classList.add("product-category");
          productDiv.appendChild(productCategory); */

        //Button
        let productBtn: HTMLButtonElement = document.createElement("button");
        productBtn.innerText = ("Kaufen");
        productBtn.classList.add("product-btn");
        productDiv.appendChild(productBtn);

        document.getElementById(data[i].category + "-content")?.appendChild(productDiv);

    }
    

    let einkaufswagenzahl: HTMLElement = document.createElement("p");
    einkaufswagenzahl.setAttribute("id", "number");
    einkaufswagenzahl.innerHTML = "0";
    //divElement.appendChild(buttonElement);


    einkaufswagenzahl.addEventListener("click", function () {
        einkaufswagenzahl.value = parseInt(einkaufswagenzahl.value) + 1;
        console.log("ich wurde geklickt");


    });
}
