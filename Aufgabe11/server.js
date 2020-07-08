"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe09 = void 0;
const Http = require("http"); //- Laden des Modules (Erweiterung) HTTP, um einen Server zu bauen. * = sämtliche Funktionalität laden
const Url = require("url"); //- Aufgabe des Url Moduls ist die Aufsplittung der URl in lesbare Teile. Muss importiert werden zur Verwendung
var Aufgabe09;
(function (Aufgabe09) {
    console.log("Starte Server"); //- Print "Starte Server" in der Console
    let port = Number(process.env.PORT); //- Hat die Maschine mir einen port zugeteilt? - suche nach port, variable
    if (!port)
        port = 8100; //- Wenn nicht dann weise den Port 8100 zu
    let server = Http.createServer(); //- Erstelle Variable server und erstelle server in ihr, rufe funktion auf
    server.addListener("request", handleRequest); //- der server horcht, wenn er eine request erhält, ruft er die funktion handleRequest auf - 
    server.addListener("listening", handleListen); //Erstelle EventListener der hört
    server.listen(port); //- Höre auf die Port nummer und schau ob eine Nachricht reinkommt -
    function handleListen() {
        console.log("Listening"); //macht einen Eintrag in die Konsole sobald sie aufgerufen wird (und alles funktioniert)
    }
    function handleRequest(_request, _response) {
        //Bei der Request(Anfrage) kommt ein Parameter vom Typ "IncomingMessage" herein und es wird eine Antwort zur Verüfung gestellt "ServerResponse",
        //die aber noch leer ist
        _response.setHeader("content-type", "text/html; charset=utf-8"); //- Wir füllen die Response jetzt, bis jetzt nur mit einem Text
        _response.setHeader("Access-Control-Allow-Origin", "*"); //- im Header befinden sich Infos zur Nachricht, im Body die Nachricht selbst  
        if (_request.url) { //- Falls eine Url mit unserem url request reinkommt, wird er bearbeitet: ... >
            let url = Url.parse(_request.url, true); //- Die Url muss übersetzt/lesbar gemacht werden mit "UrlWithParsedQuery"
            //der url.parse wandelt die informationen von let url in ein anderes formular um und der Parameter "true" macht ein assoziatives array draus,
            //welches sich leichter lesen lässt
            let pathVariable = url.pathname; //oder 0, ist ein benötigter zusatz zu pathname
            if (pathVariable == "/html") {
                for (let key in url.query) { //! über ein assoziatives array iterieren? mittleres video
                    _response.write(key + ": " + url.query[key] + "<br/>"); //Die Antwort vom Server (mit Formatierung hier)
                }
            }
            if (pathVariable == "/json") { //Wenn auf json geklickt wurde, schicke es als Json
                let jsonString = JSON.stringify(url.query); //- die url als json formatieren und mit 
                _response.write(jsonString); //- In der Repsonse wird jetzt auch noch dieser Json string mitgeschickt
            }
            console.log(_request.url); //Schreiben er Antwort als request.url, unwichtig
            _response.end(); //Antwort zu Ende, wenn vergessen wird response nicht veschickt
        }
    }
})(Aufgabe09 = exports.Aufgabe09 || (exports.Aufgabe09 = {}));
//# sourceMappingURL=server.js.map