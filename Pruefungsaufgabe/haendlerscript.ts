namespace Pruefungsaufgabe {

    interface Product {
        img: string;
        price: number;
        name: string;
        description: string;
        category: string;
    }

    let bestellung: Product[] = JSON.parse((localStorage.getItem("storagespeicher")!));
    console.log(bestellung);



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

    }















}