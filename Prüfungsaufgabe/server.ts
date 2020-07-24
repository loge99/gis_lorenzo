import * as Http from "http";
import * as url from "url";

export namespace Prüfungsaufgabe {
    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);



    function handleListen(): void {
        console.log("Ready for icecream");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("Getting ice cream...");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let q: url.UrlWithParsedQuery = url.parse(_request.url, true);
            for (let key in q.query) {
                console.log("Information: " + q.query[key]);
            }

            _response.write("Thanks for ice cream order");

            _response.end();
        }

    }
}
