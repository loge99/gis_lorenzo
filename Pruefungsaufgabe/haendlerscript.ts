namespace Pruefungsaufgabe {

    interface Product { //Erstelle Interface
        img: string;
        price: number;
        name: string;
        description: string;
        category: string;
    }
    console.log(localStorage.getItem("storagespeicher"));
    let bestellung: Product[] = JSON.parse(localStorage.getItem("storagespeicher")!); //Bestellung is array vom typ product, variable Bestellungen "Storagespeicher" ais local storage holen ; macht es zu array weil davor string
  //Ausrufezeichen ignoriert dass string leer sein kann, ohne ausrufe zeichen gibt es fehlermeldumg die davor warnt
    //localStorage holt sich item und parst es im gleichen 
    console.log(bestellung); //Schreibe inhalt von Variable Bestellung in Console


    //Generierung der Bestellungen
    for (let i: number = 0; i < bestellung.length; i++) {

        let productDiv: HTMLDivElement = document.createElement("div");
        productDiv.classList.add("product");

        //Name
        let productName: HTMLSpanElement = document.createElement("span");
        productName.innerText = bestellung[i].name;
        productName.classList.add("product-name");
        productDiv.appendChild(productName);

        //Image
        let productImg: HTMLImageElement = document.createElement("img");
        productImg.src = bestellung[i].img;
        productImg.alt = bestellung[i].name;
        productImg.classList.add("product-img");
        productDiv.appendChild(productImg);



        document.getElementById("eis-content")?.appendChild(productDiv);
        //Den Product Div der die namen und images enthält em eis-content bereich zuweisen

    }















}