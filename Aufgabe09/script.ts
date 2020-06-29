namespace Aufgabe09 {

    let formData: FormData;
    let responseSplitted: string[];
    let myButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("Senden-HTML"));
    myButton.addEventListener("click", handleHtmlButton);
    let jsonBtn: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("Senden-JSON"));
    jsonBtn.addEventListener("click", handleJsonButton);

    function formDataToUrl(): string {
        formData = new FormData(document.forms[0]);
        let url: string = "https://gislorenzo.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        return url;
    }
    async function handleJsonButton(): Promise<void> { getJsonResponse(await formDataToUrl()); }
    async function handleHtmlButton(): Promise<void> { getHtmlResponse(await formDataToUrl()); }
    async function getHtmlResponse(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url, { method: "get" });
        let response2: string = await response.text();
        responseSplitted = response2.split("<split>");
        (<HTMLElement>document.getElementById("response")).innerHTML = responseSplitted[0];
    }
    async function getJsonResponse(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url, { method: "get" });
        let response2: string = await response.text();
        responseSplitted = response2.split("<split>");
        let textParsed: string = JSON.parse(responseSplitted[1]);
        console.log(textParsed);
    }
}