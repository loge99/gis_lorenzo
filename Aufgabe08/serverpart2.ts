namespace Aufgabe08 {
    document.getElementById("Seenden")?.addEventListener("click", anzeigen1);


    async function anzeigen1(): Promise<void> {
        let url: string = "https://gislorenzo.herokuapp.com/";
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        console.log(query.toString());
        await fetch(url);
        for (let entry of query) { // Logging Form Data in Console
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]); 

        }
    }
}