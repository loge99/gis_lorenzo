"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prüfungsaufgabe = void 0;
const Http = require("http");
const url = require("url");
var Prüfungsaufgabe;
(function (Prüfungsaufgabe) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Ready for icecream");
    }
    function handleRequest(_request, _response) {
        console.log("Getting ice cream...");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let q = url.parse(_request.url, true);
            for (let key in q.query) {
                console.log("Information: " + q.query[key]);
            }
            _response.write("Thanks for ice cream order");
            _response.end();
        }
    }
})(Prüfungsaufgabe = exports.Prüfungsaufgabe || (exports.Prüfungsaufgabe = {}));
//# sourceMappingURL=server.js.map