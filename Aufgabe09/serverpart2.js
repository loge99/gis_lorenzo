"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    document.getElementById("Seenden")?.addEventListener("click", anzeigen1);
    async function anzeigen1() {
        let url = "https://gislorenzo.herokuapp.com/";
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        console.log(query.toString());
        await fetch(url);
        for (let entry of query) { // Logging Form Data in Console
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=serverpart2.js.map