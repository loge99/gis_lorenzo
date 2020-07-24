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
        //productBtn.addEventListener("click", testtest.bind(data[i])); 
        productBtn.setAttribute("preis", data[i].price.toString());

        document.getElementById(data[i].category + "-content")?.appendChild(productDiv);

    }

    let warenzahlzaehler: number = 0;
    let anzahl: HTMLElement = document.createElement("p");
    //anzahl.setAttribute("id", "artikelzahlzaehler");

    let preis: number = 0;
    let pricezahl: HTMLElement = document.createElement("p");


    function zaehler(this: Product, _event: Event): void {
        warenzahlzaehler++;
        console.log(warenzahlzaehler);
        anzahl.innerHTML = warenzahlzaehler.toString();

        preis += this.price;
        console.log(preis + "€");
        pricezahl.innerHTML = preis.toString() + "€";

        let bild: HTMLImageElement = document.createElement("img");
        bild.src = this.img;
        bild.id = "bildgroesse";
        document.getElementById("shoppingc")?.appendChild(bild);

        document.getElementById("number")?.appendChild(anzahl);
        document.getElementById("price")?.appendChild(pricezahl);
    }


    let lokal: Product[] = new Array;
    function pushLocal(this: Product, _event: Event): void {
        lokal.push(this); //push this (das angeklickte) in array und das wird in den lokal storage gepackt
        localStorage.setItem("storagespeicher", JSON.stringify(lokal));
    }
}




document.getElementById("hidetische")?.addEventListener("click", hidecategorytische);

document.getElementById("showtische")?.addEventListener("click", showcategorytische);

document.getElementById("hidestühle")?.addEventListener("click", hidecategorystühle);
document.getElementById("showstühle")?.addEventListener("click", showcategorystühle);


function hidecategorytische(_event: Event): void {
    (<HTMLElement>document.getElementById("Tische-content")).style.display = "none";
    (<HTMLElement>document.getElementById("hidetische")).style.display = "none";
}

function hidecategorystühle(_event: Event): void {
    (<HTMLElement>document.getElementById("Stühle-content")).style.display = "none";
    (<HTMLElement>document.getElementById("hidestühle")).style.display = "none";

}

function showcategorystühle(_event: Event): void {
    (<HTMLElement>document.getElementById("Stühle-content")).style.display = "flex";
}

function showcategorytische(_event: Event): void {
    (<HTMLElement>document.getElementById("Tische-content")).style.display = "flex";
}


