namespace Prüfungsaufgabe {



    for (let i: number = 0; i < data.length; i++) {
        let productDiv: HTMLDivElement = document.createElement("div");
        productDiv.classList.add("product");

        //Name
        let productName: HTMLSpanElement = document.createElement("span");
        productName.innerText = data[i].name;
        productName.classList.add("product-name");
        productDiv.appendChild(productName);

        //Image
        let productImg: HTMLImageElement = document.createElement("img");
        productImg.src = data[i].img;
        productImg.alt = data[i].name;
        productImg.classList.add("product-img");
        productDiv.appendChild(productImg);

        //Description
        let productDesc: HTMLSpanElement = document.createElement("span");
        productDesc.innerText = data[i].description;
        productDesc.classList.add("product-desc");
        productDiv.appendChild(productDesc);

        //Price
        let productPrice: HTMLSpanElement = document.createElement("span");
        productPrice.innerText = data[i].price.toLocaleString("de-DE", { currency: "EUR", style: "currency" });
        productPrice.classList.add("product-price");
        productDiv.appendChild(productPrice);

        //Button
        let productBtn: HTMLButtonElement = document.createElement("button");
        productBtn.innerText = "In die Tüte";
        productBtn.classList.add("product-btn");
        productDiv.appendChild(productBtn);
        productBtn.addEventListener("click", zaehler.bind(data[i]));
        productBtn.addEventListener("click", pushLocal.bind(data[i]));
        productBtn.setAttribute("preis", data[i].price.toString());

        document.getElementById(data[i].category + "-content")?.appendChild(productDiv);

    }

    let warenZahlZaehler: number = 0;
    let anzahl: HTMLElement = document.createElement("p");

    let preis: number = 0;
    let priceZahl: HTMLElement = document.createElement("p");


    function zaehler(this: Product, _event: Event): void {
        warenZahlZaehler++;
        console.log(warenZahlZaehler);
        anzahl.innerHTML = warenZahlZaehler.toString();

        preis += this.price;
        console.log(preis + "€");
        priceZahl.innerHTML = preis.toString() + "€";

        let bild: HTMLImageElement = document.createElement("img");
        bild.src = this.img;
        bild.id = "bildgroesse";
        document.getElementById("shoppingc")?.appendChild(bild);

        document.getElementById("number")?.appendChild(anzahl);
        document.getElementById("price")?.appendChild(priceZahl);
    }


    let lokal: Product[] = new Array;
    function pushLocal(this: Product, _event: Event): void {
        lokal.push(this); //push this (das angeklickte) in array und das wird in den lokal storage gepackt
        localStorage.setItem("storagespeicher", JSON.stringify(lokal));
    }
}




document.getElementById("hideeis")?.addEventListener("click", hideKategorieEis);
document.getElementById("showeis")?.addEventListener("click", showKategorieEis);

document.getElementById("hidetoppings")?.addEventListener("click", hideKategorieToppings);
document.getElementById("showtoppings")?.addEventListener("click", showKategorieToppings);

document.getElementById("hidetecher")?.addEventListener("click", hideKategorieBecher);



function hideKategorieEis(_event: Event): void {
    (<HTMLElement>document.getElementById("eis-content")).style.display = "none";
    (<HTMLElement>document.getElementById("hideeis")).style.display = "none";
}
function showKategorieEis(_event: Event): void {
    (<HTMLElement>document.getElementById("eis-content")).style.display = "flex";
}

function hideKategorieToppings(_event: Event): void {
    (<HTMLElement>document.getElementById("toppings-content")).style.display = "none";
    (<HTMLElement>document.getElementById("hidetoppings")).style.display = "none";
}
function showKategorieToppings(_event: Event): void {
    (<HTMLElement>document.getElementById("toppings-content")).style.display = "flex";
}

function hideKategorieBecher(_event: Event): void {
    (<HTMLElement>document.getElementById("behälter-content")).style.display = "none";
    (<HTMLElement>document.getElementById("hidebecher")).style.display = "none";
}




