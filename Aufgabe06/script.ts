
namespace Aufgabe06 {




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

        //Description
        let productDesc: HTMLSpanElement = document.createElement("span");
        productDesc.innerText = data[i].description;
        productDesc.classList.add("product-desc");
        productDiv.appendChild(productDesc);

        /*   //Category
          let productCategory: HTMLSpanElement = document.createElement("span");
          productCategory.innerText = data [i].category;
          productCategory.classList.add("product-category");
          productDiv.appendChild(productCategory); */

        //Button
        let productBtn: HTMLButtonElement = document.createElement("button");
        productBtn.innerText = "Buy";
        productBtn.classList.add("product-btn");
        productDiv.appendChild(productBtn);
        productBtn.addEventListener("click", zaehler);
        productBtn.setAttribute("preis", data[i].price.toString());

        document.getElementById(data[i].category + "-content")?.appendChild(productDiv);


    }

    let warenzahlzaehler: number = 0;
    let anzahl: HTMLElement = document.createElement("p");
    anzahl.setAttribute("id", "artikelzahlzaehler");

    let preis: number = 0;

    document.getElementById("hidetische")?.addEventListener("click", hidecategorytische);
    document.getElementById("hidetische")?.addEventListener("click", showcategorytische);

    document.getElementById("hidestühle")?.addEventListener("click", hidecategorystühle);
    document.getElementById("hidestühle")?.addEventListener("click", showcategorystühle);

    function zaehler(_event: Event): void {
        warenzahlzaehler++;
        console.log(warenzahlzaehler);
        anzahl.innerHTML = warenzahlzaehler.toString();

        preis += parseFloat((<HTMLInputElement>_event.target)?.getAttribute("preis")!);
        console.log(preis + "€");
        document.getElementById("add")?.appendChild(anzahl);
    }

    function hidecategorytische(_event: Event): void {
        (<HTMLElement>document.getElementById("Tische-content")).style.display = "none";
    }

    function hidecategorystühle(_event: Event): void {
        (<HTMLElement>document.getElementById("Stühle-content")).style.display = "none";
    }

    function showcategorystühle(_event: Event): void {
        (<HTMLElement>document.getElementById("Stühle-content")).style.display = "none";
    }

    function showcategorytische(_event: Event): void {
        (<HTMLElement>document.getElementById("Stühle-content")).style.display = "none";
    }

}
