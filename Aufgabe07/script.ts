
namespace Aufgabe07 {


    interface Product {
        img: string;
        price: number;
        name: string;
        description: string;
        category: number;
    }





    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response;
        let möbelJSON: string;

        response = await fetch(_url);
        console.log("Response", response);
        möbelJSON = await response.text();
        console.log(JSON.parse(möbelJSON));
        pageload(JSON.parse(möbelJSON));
    }
    communicate("daten.json");


    function pageload(möbel: Product[]): void {

        for (let index: number = 0; index < möbel.length; index++) {

            let newDiv: HTMLElement = document.createElement("div");
            newDiv.id = "at" + index;

            if (möbel[index].category == 0) {
                document.getElementById("Stühle-content")?.appendChild(newDiv);
                newDiv.setAttribute("class", "stuhmöbel!");

            }

            if (möbel[index].category == 1) {
                document.getElementById("Tische-content")?.appendChild(newDiv);
                newDiv.setAttribute("class", "tischmöbel!");

            }

            let titelNeu: HTMLElement = document.createElement("p");
            titelNeu.innerHTML = möbel[index].name;
            document.getElementById("at" + index)?.appendChild(titelNeu);

            let imageNeu: HTMLElement = document.createElement("img");
            imageNeu.setAttribute("src", möbel[index].img);
            document.getElementById("at" + index)?.appendChild(imageNeu);

            let descriptionNeu: HTMLElement = document.createElement("p");
            descriptionNeu.innerHTML = möbel[index].description;
            document.getElementById("at" + index)?.appendChild(descriptionNeu);

            let priceNeu: HTMLElement = document.createElement("p");

            priceNeu.innerHTML = "<hr><p>" + möbel[index].price + " €</p>";
            document.getElementById("at" + index)?.appendChild(priceNeu);

            let newButton: HTMLInputElement = document.createElement("input");
            newButton.setAttribute("class", "in_den_einkaufswagen");
            document.getElementById("at" + index)?.appendChild(newButton);
            newButton.value = "In den Einkaufswagen";
            newButton.type = "submit";
            newButton.addEventListener("click", zaehler.bind(möbel[index]));
            newButton.setAttribute("name", JSON.stringify(möbel[index]));
        }
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
