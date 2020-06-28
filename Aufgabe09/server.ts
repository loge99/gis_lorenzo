    import * as Http from "http"; //Laden des Modules (Erweiterung) HTTP, um einen Server zu bauen. * = sämtliche Funktionalität laden
    import * as Url from "url";


    export namespace A08Server { //Bedeutungsloses Schlüsselwort aufgrund von "import"
      console.log("Starting server"); //Bedeutungsloses Schlüsselwort aufgrund von "import"
      let port: number = Number(process.env.PORT); //Erstellung Variable für Port Nummer
      if (!port)
        port = 8100; //Falls port = 8100

      let server: Http.Server = Http.createServer(); //Erstelle Variable server und erstelle server
      server.addListener("request", handleRequest); //Erstelle EventListener der auf requests hört
      server.addListener("listening", handleListen); //Erstelle EventListener der hört
      server.listen(port);    // Höre den Server 8100 ab

      function handleListen(): void { //Die Funktion Listening hat keinen Rückgabewert und
        console.log("Listening");      //macht einen Eintrag in die Konsole sobald sie aufgerufen wird (und alles funktioniert)
      }

      function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {  //Die Funktion "handleRequest" wird aufgerufen
        //sobald ein request von Client Seite eintrifft & und gibt eine Response
        console.log("I hear voices!");  //Nachdem dass geschehen ist erscheint der Konsoleneintrag "I hear voices!"

        _response.setHeader("content-type", "text/html; charset=utf-8");  // Festlegung des Headers für die Response
        _response.setHeader("Access-Control-Allow-Origin", "*");

        _response.write(_request.url);  //Schreiben er Antwort als request.url
        console.log(_request.url);  //Schreiben er Antwort als request.url

        _response.end(); //Antwort zu Ende
      }
    }
