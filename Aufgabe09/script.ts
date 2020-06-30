namespace Aufgabe09 {


    async function ausgebenjson(_event: Event): Promise<void> { //Die antwort wird als json in dder Konsole der website ausgegeben
        //_event (Funktionsparamter) "Event" Steht für einen Typ; heißt das FUnktion nur auf Event reagiert, z.B. klickt auf button 
        let formData: FormData = new FormData(document.forms[0]); //Formular data in formData packen, man brauch formular nicht genauer benennen, es gibt nur eins
        let query: URLSearchParams = new URLSearchParams(<any>formData); //Variable für query string vom typ URLSearchParams (da kommt formdata rein)
        let url: string = "https://gislorenzo.herokuapp.com";
        url = url + "/json";  //denn es wurde json button geklickt und das besagt die aufgabenstellung
        url = url + "?" + query.toString(); // Informationen in url werden abgetrennt durch fragezeichen, hier werden sie als string an url angefügt, sind normalerweise nur metadaten
        //im query.tostring sind informationen, z.B. FormData
// die daten

        let response: Response = await fetch(url); // client wartet auf serverantwort von der website "url", await dass er wartet bis ne antwort kommt bevor er weitermacht
        let responseText: string = await response.json(); //ERstellt die variable antwort, damit sie in 
        //der Konsole angezeigt werden kann als json string
        console.log(responseText); //und hier wird dann die json in der konsole ausgegeben


    }


    async function ausgebenhtml(_event: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: string = "https://gislorenzo.herokuapp.com";
        url = url + "/html";
        url = url + "?" + query.toString();


        let response: Response = await fetch(url); //Holt die url, die der server wieder zurückschickt (unter button als html in dem fall)
        let responseText: string = await response.text(); //holt die reponse und führt funktion text aus
        let sevrerAntwort: HTMLElement = <HTMLElement>document.getElementById("serverantwort"); // hier anders weil ich das ganze als textdatei auf der website erzeugen will
        sevrerAntwort.innerHTML = responseText; 



    }


    document.getElementById("Senden-JSON")?.addEventListener("click", ausgebenjson);
    document.getElementById("Senden-HTML")?.addEventListener("click", ausgebenhtml);


}