namespace Pruefungsaufgabe {

    interface Product {
        img: string;
        price: number;
        name: string;
        description: string;
        category: string;
    }
    async function erhalteJSON(_url: RequestInfo): Promise<void> {
        let response: Response;
        let datenJson: string;
        response = await fetch(_url);
        datenJson = await response.text();
        pageBuild(JSON.parse(datenJson));
    }

    erhalteJSON("daten.json");
    function pageBuild(_datenArray: Product[]): void {

        for (let i: number = 0; i < _datenArray.length; i++) {
            let productDiv: HTMLDivElement = document.createElement("div");
            productDiv.classList.add("product");

            //Name
            let productName: HTMLSpanElement = document.createElement("span");
            productName.innerText = _datenArray[i].name;
            productName.classList.add("product-name");
            productDiv.appendChild(productName);

            //Image
            let productImg: HTMLImageElement = document.createElement("img");
            productImg.src = _datenArray[i].img;
            productImg.alt = _datenArray[i].name;
            productImg.classList.add("product-img");
            productDiv.appendChild(productImg);

            //Description
            let productDesc: HTMLSpanElement = document.createElement("span");
            productDesc.innerText = _datenArray[i].description;
            productDesc.classList.add("product-desc");
            productDiv.appendChild(productDesc);

            //Price
            let productPrice: HTMLSpanElement = document.createElement("span");
            productPrice.innerText = _datenArray[i].price.toLocaleString("de-DE", { currency: "EUR", style: "currency" });
            productPrice.classList.add("product-price");
            productDiv.appendChild(productPrice);

            //Button
            let productBtn: HTMLButtonElement = document.createElement("button");
            productBtn.innerText = "In die Tüte";
            productBtn.classList.add("product-btn");
            productDiv.appendChild(productBtn);
            productBtn.addEventListener("click", zaehler.bind(_datenArray[i]));
            productBtn.addEventListener("click", pushLocal.bind(_datenArray[i]));
            productBtn.setAttribute("preis", _datenArray[i].price.toString());

            document.getElementById(_datenArray[i].category + "-content")?.appendChild(productDiv);

        }
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
        lokal.push(this); //push this (das angeklickte) in array und wird in lokal storage gepackt
        localStorage.setItem("storagespeicher", JSON.stringify(lokal));
    }



    document.getElementById("hideeis")?.addEventListener("click", hideKategorieEis);
    document.getElementById("hidetoppings")?.addEventListener("click", hideKategorieToppings);
    document.getElementById("hidebecher")?.addEventListener("click", hideKategorieBecher);
    document.getElementById("showall")?.addEventListener("click", showAllKategorien);
    function hideKategorieEis(_event: Event): void {
        (<HTMLElement>document.getElementById("eis-content")).style.display = "none";
        (<HTMLElement>document.getElementById("hideeis")).style.display = "none";
    }
    function hideKategorieToppings(_event: Event): void {
        (<HTMLElement>document.getElementById("toppings-content")).style.display = "none";
        (<HTMLElement>document.getElementById("hidetoppings")).style.display = "none";
    }
    function hideKategorieBecher(_event: Event): void {
        (<HTMLElement>document.getElementById("behälter-content")).style.display = "none";
        (<HTMLElement>document.getElementById("hidebecher")).style.display = "none";
    }
    function showAllKategorien(_event: Event): void {
        (<HTMLElement>document.getElementById("eis-content")).style.display = "flex";
        (<HTMLElement>document.getElementById("toppings-content")).style.display = "flex";
        (<HTMLElement>document.getElementById("behälter-content")).style.display = "flex";
    }


}