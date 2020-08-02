"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pruefungsaufgabe = void 0;
const Http = require("http"); //Laden des Modules (Erweiterung) HTTP, um einen Server zu bauen. * = sämtliche Funktionalität laden
const url = require("url"); //Aufgabe des Url Moduls ist die Aufsplittung der URl in lesbare Teile. Muss importiert werden zur Verwendung
var Pruefungsaufgabe;
(function (Pruefungsaufgabe) {
    console.log("Starte Server");
    let port = Number(process.env.PORT); //Port ist wie ein Hafen, dann können Informationen rein und raus 
    //process.env gibt mir Informationen über meinen node Prozess,über meine Maschine/meinen Rechner | in dem Fall über den Port
    if (!port) //Hat die Maschine mir einen port zugeteilt? - suche nach port, variable
        port = 8100; //Wenn nicht dann weise den Port 8100 zu
    let server = Http.createServer(); //Erstelle Variable server und erstelle server in ihr, rufe funktion auf
    server.addListener("request", handleRequest); //Wenn Server eine Request erhält, dann rufe handleRequest() auf
    server.addListener("listening", handleListen); //Hört einfach nur auf Server
    server.listen(port); //Höre auf die Port nummer und schau ob eine Nachricht reinkommt
    function handleListen() {
        console.log("Ready for icecream"); //Print bei aufruf
    }
    function handleRequest(_request, _response) {
        //Bei der Request(Anfrage) kommt ein Parameter vom Typ "IncomingMessage" herein und es wird eine Antwort zur Verüfung gestellt "ServerResponse",
        //die aber noch leer ist
        console.log("Getting ice cream...");
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Füllen der Response mit leerem Text
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Erlaubt dass man von überall anfragen darf, sonst motzt Browser
        //im Header befinden sich Infos zur Nachricht, im Body die Nachricht selbst 
        if (_request.url) { //URL Modul hilfe die request weiterzuverarbeiten
            //erst wird überprüft ob eine verarbetinare URL da ist
            let q = url.parse(_request.url, true);
            //"parse" "urlwithparsedquery" macht die url leserlich, durch wandel in anderes format
            //Parameter "true" macht ein assoziatives array draus, welches sich leichter lesen lässt
            for (let key in q.query) { //Query brauchen wir Weil da die infos (wie preis) drinnen sind; also für jeden key im query...
                console.log("Information: " + q.query[key]); // gebe "Information" und das schlüsselwertepaar aus, was man also unter diesem key im query findet
            }
            _response.write("Danke! Deine Bestellung ist bei uns eingegangen."); //Schreibe im Browser
            _response.end(); //Antwort zu Ende, wenn vergessen wird response nicht veschickt
        }
    }
})(Pruefungsaufgabe = exports.Pruefungsaufgabe || (exports.Pruefungsaufgabe = {}));
//# sourceMappingURL=server.js.map