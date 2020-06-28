namespace Aufgabe09 {

    let formData: FormData;
    let respSplitted: string[];
    let myButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("Senden-HTML"));
    myButton.addEventListener("click", handleHtmlButton);
    let jsonBtn: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("Senden-JSON"));
    jsonBtn.addEventListener("click", handleJsonButton);
    
    function addToURL(): string { //Url mit Forminhalt
        formData = new FormData(document.forms[0]);
        let url: string = "https://samuelgis2020.herokuapp.com/";
        //let url: string = "http://127.0.0.1:8100/Aufgabe09/index.html";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        return url;
    }

    async function handleHtmlButton(): Promise<void> {
        getHtmlResponse(await addToURL());
    }

    async function handleJsonButton(): Promise<void> {
        getJsonResponse(await addToURL());
    }

    async function getHtmlResponse(_url: RequestInfo): Promise<void> {     //get html from server

        let response: Response = await fetch(_url, { method: "get" });
        let resp2: string = await response.text();
        respSplitted = resp2.split("<split>");
        (<HTMLElement>document.getElementById("response")).innerHTML = respSplitted[0];
    }

    async function getJsonResponse(_url: RequestInfo): Promise<void> {    //get json from server

        let response: Response = await fetch(_url, { method: "get" });
        let resp2: string = await response.text();
        
        respSplitted = resp2.split("<split>");
        let textParsed: string = JSON.parse(respSplitted[1]);
        console.log(textParsed);
    }
}