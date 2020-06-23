interface Artikel {
    url: string;
    name: string;
    beschreibung: string;
    preis: number;
    category: number;

}

let möbel: Artikel[] = JSON.parse((localStorage.getItem("name")!));
console.log(möbel); // Schreibe den Möbel in Variable "möbel" in Konsole

pageload(); //Aufbau Seite


function pageload(): void {

    for (let index: number = 0; index < möbel.length; index++) { //Für Jeden Möbel

        let newDiv: HTMLElement = document.createElement("div");
        newDiv.id = "at" + index;

        if (möbel[index].category == 0) {
            document.getElementById("artikelplatz")?.appendChild(newDiv);
            newDiv.setAttribute("class", "tasteninstrumente");
        }

        if (möbel[index].category == 1) {
            document.getElementById("artikelplatz")?.appendChild(newDiv);
            newDiv.setAttribute("class", "blasinstrumente");
        }

        let titelNeu: HTMLElement = document.createElement("p");
        titelNeu.innerHTML = möbel[index].name;
        document.getElementById("at" + index)?.appendChild(titelNeu);

        let imageNeu: HTMLElement = document.createElement("img");
        imageNeu.setAttribute("src", möbel[index].url);
        document.getElementById("at" + index)?.appendChild(imageNeu);

        let descriptionNeu: HTMLElement = document.createElement("p");
        descriptionNeu.innerHTML = möbel[index].beschreibung;
        document.getElementById("at" + index)?.appendChild(descriptionNeu);

        let priceNeu: HTMLElement = document.createElement("p");

        priceNeu.innerHTML = "<hr><p>" + möbel[index].preis + " €</p>";
        document.getElementById("at" + index)?.appendChild(priceNeu);

        let buttonNeu: HTMLInputElement = document.createElement("input");
        buttonNeu.setAttribute("class", "in_den_einkaufswagen");
        document.getElementById("at" + index)?.appendChild(buttonNeu);
        buttonNeu.value = "Löschen";
        buttonNeu.type = "submit";
        buttonNeu.addEventListener("click", entfernen.bind(möbel[index]));
        buttonNeu.setAttribute("index", index.toString());
        buttonNeu.setAttribute("name", JSON.stringify(möbel[index]));
    }

}

let gesamtPreis: number = 0;
for (let index: number = 0; index < möbel.length; index++) {
    gesamtPreis += möbel[index].preis;
}
let gesPr = document.createElement("h2");
gesPr.id = "preiss";
gesPr.innerHTML = "Preis: " + gesamtPreis.toString() + "€";
document.getElementById("gesamtPreis")?.appendChild(gesPr);



document.getElementById("removeAll")?.addEventListener("click", alleEntfernen);

function alleEntfernen(this: Artikel, _event: Event): void {
    document.getElementById("artikelplatz")?.remove();
    localStorage.clear();
    möbel.splice(0);

    let gesPr = document.createElement("h2");
    gesPr.innerHTML = "Preis: 0€";
    document.getElementById("gesamtPreis")?.appendChild(gesPr);

    document.getElementById("preiss")?.remove();
}


function entfernen(_event: Event): void {
    let index: string = (<HTMLInputElement>_event.target)?.getAttribute("index")!;
    document.getElementById("at" + index)?.remove();

    möbel.splice(parseInt(index), 1);
    
    console.log(möbel);
    localStorage.setItem("name", JSON.stringify(möbel));

    location.reload();

}
