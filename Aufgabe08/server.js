"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
const Http = require("http"); //Laden des Modules (Erweiterung) HTTP, um einen Server zu bauen. * = sämtliche Funktionalität laden
var A08Server;
(function (A08Server) {
    console.log("Starting server"); //Bedeutungsloses Schlüsselwort aufgrund von "import"
    let port = Number(process.env.PORT); //Erstellung Variable für Port Nummer
    if (!port)
        port = 8100; //Falls port = 8100
    let server = Http.createServer(); //Erstelle Variable server und erstelle server
    server.addListener("request", handleRequest); //Erstelle EventListener der auf requests hört
    server.addListener("listening", handleListen); //Erstelle EventListener der hört
    server.listen(port); // Höre den Server 8100 ab
    function handleListen() {
        console.log("Listening"); //macht einen Eintrag in die Konsole sobald sie aufgerufen wird (und alles funktioniert)
    }
    function handleRequest(_request, _response) {
        //sobald ein request von Client Seite eintrifft & und gibt eine Response
        console.log("I hear voices!"); //Nachdem dass geschehen ist erscheint der Konsoleneintrag "I hear voices!"
        _response.setHeader("content-type", "text/html; charset=utf-8"); // Festlegung des Headers für die Response
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url); //Schreiben er Antwort als request.url
        console.log(_request.url); //Schreiben er Antwort als request.url
        _response.end(); //Antwort zu Ende
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=server.js.map