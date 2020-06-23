"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    async function communicate(_url) {
        let response;
        let möbelJSON;
        response = await fetch(_url);
        console.log("Response", response);
        möbelJSON = await response.text();
        console.log(JSON.parse(möbelJSON));
        pageload(JSON.parse(möbelJSON));
    }
    communicate("daten.json");
    function pageload(möbel) {
        for (let index = 0; index < möbel.length; index++) {
            let newDiv = document.createElement("div");
            newDiv.id = "at" + index;
            if (möbel[index].category == 0) {
                document.getElementById("Stühle-content")?.appendChild(newDiv);
                newDiv.setAttribute("class", "stuhmöbel!");
            }
            if (möbel[index].category == 1) {
                document.getElementById("Tische-content")?.appendChild(newDiv);
                newDiv.setAttribute("class", "tischmöbel!");
            }
            let titelNeu = document.createElement("p");
            titelNeu.innerHTML = möbel[index].name;
            document.getElementById("at" + index)?.appendChild(titelNeu);
            let imageNeu = document.createElement("img");
            imageNeu.setAttribute("src", möbel[index].img);
            document.getElementById("at" + index)?.appendChild(imageNeu);
            let descriptionNeu = document.createElement("p");
            descriptionNeu.innerHTML = möbel[index].description;
            document.getElementById("at" + index)?.appendChild(descriptionNeu);
            let priceNeu = document.createElement("p");
            priceNeu.innerHTML = "<hr><p>" + möbel[index].price + " €</p>";
            document.getElementById("at" + index)?.appendChild(priceNeu);
            let newButton = document.createElement("input");
            newButton.setAttribute("class", "in_den_einkaufswagen");
            document.getElementById("at" + index)?.appendChild(newButton);
            newButton.value = "In den Einkaufswagen";
            newButton.type = "submit";
            newButton.addEventListener("click", zaehler.bind(möbel[index]));
            newButton.setAttribute("name", JSON.stringify(möbel[index]));
        }
    }
    let warenzahlzaehler = 0;
    let anzahl = document.createElement("p");
    anzahl.setAttribute("id", "artikelzahlzaehler");
    let preis = 0;
    document.getElementById("hidetische")?.addEventListener("click", hidecategorytische);
    document.getElementById("hidetische")?.addEventListener("click", showcategorytische);
    document.getElementById("hidestühle")?.addEventListener("click", hidecategorystühle);
    document.getElementById("hidestühle")?.addEventListener("click", showcategorystühle);
    function zaehler(_event) {
        warenzahlzaehler++;
        console.log(warenzahlzaehler);
        anzahl.innerHTML = warenzahlzaehler.toString();
        preis += parseFloat(_event.target?.getAttribute("preis"));
        console.log(preis + "€");
        document.getElementById("add")?.appendChild(anzahl);
    }
    function hidecategorytische(_event) {
        document.getElementById("Tische-content").style.display = "none";
    }
    function hidecategorystühle(_event) {
        document.getElementById("Stühle-content").style.display = "none";
    }
    function showcategorystühle(_event) {
        document.getElementById("Stühle-content").style.display = "none";
    }
    function showcategorytische(_event) {
        document.getElementById("Stühle-content").style.display = "none";
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script.js.map