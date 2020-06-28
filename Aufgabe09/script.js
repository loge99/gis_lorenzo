"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    let formData;
    let respSplitted;
    let myButton = document.getElementById("Senden-HTML");
    myButton.addEventListener("click", handleHtmlButton);
    let jsonBtn = document.getElementById("Senden-JSON");
    jsonBtn.addEventListener("click", handleJsonButton);
    function addToURL() {
        formData = new FormData(document.forms[0]);
        let url = "https://samuelgis2020.herokuapp.com/";
        //let url: string = "http://127.0.0.1:8100/Aufgabe09/index.html";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        return url;
    }
    async function handleHtmlButton() {
        getHtmlResponse(await addToURL());
    }
    async function handleJsonButton() {
        getJsonResponse(await addToURL());
    }
    async function getHtmlResponse(_url) {
        let response = await fetch(_url, { method: "get" });
        let resp2 = await response.text();
        respSplitted = resp2.split("<split>");
        document.getElementById("response").innerHTML = respSplitted[0];
    }
    async function getJsonResponse(_url) {
        let response = await fetch(_url, { method: "get" });
        let resp2 = await response.text();
        respSplitted = resp2.split("<split>");
        let textParsed = JSON.parse(respSplitted[1]);
        console.log(textParsed);
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=script.js.map