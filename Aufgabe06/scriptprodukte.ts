namespace Aufgabe05 {

    //Erstelle Interface
    export interface Produkt {
        bild: string;
        preis: string;
        titel: string;
        beschreibung: string;
    }

    //Produkte erstellen >>> "Tische"
    const tisch1: Produkt = {
        bild: "images/TischeTisch1.png",
        preis: "100",
        titel: "Tisch 1",
        beschreibung: "Das ist eine Beschreibung."
    };
    const tisch2: Produkt = {
        bild: "images/TischeTisch1.png",
        preis: "200",
        titel: "Tisch 2",
        beschreibung: "Das ist eine Beschreibung."
    };
    const tisch3: Produkt = {
        bild: "images/TischeTisch1.png",
        preis: "300",
        titel: "Tisch 3",
        beschreibung: "Das ist eine Beschreibung."
    };
    const tisch4: Produkt = {
        bild: "images/TischeTisch1.png",
        preis: "400",
        titel: "Tisch 4",
        beschreibung: "Das ist eine Beschreibung."
    };
    const tisch5: Produkt = {
        bild: "images/TischeTisch1.png",
        preis: "500",
        titel: "Tisch 5",
        beschreibung: "Das ist eine Beschreibung."
    };
    const tisch6: Produkt = {
        bild: "images/TischeTisch1.png",
        preis: "600",
        titel: "Tisch 6",
        beschreibung: "Das ist eine Beschreibung."
    };

    //Produkte erstellen >>> "Stühle"
    const stuhl1: Produkt = {
        bild: "images/Tische/Tisch1.png",
        preis: "50",
        titel: "Stuhl 1",
        beschreibung: "Das ist eine Beschreibung."
    };
    const stuhl2: Produkt = {
        bild: "images/TischeTisch1.png",
        preis: "100",
        titel: "Stuhl 2",
        beschreibung: "Das ist eine Beschreibung."
    };
    const stuhl3: Produkt = {
        bild: "images/TischeTisch1.png",
        preis: "150",
        titel: "Stuhl 3",
        beschreibung: "Das ist eine Beschreibung."
    };
    const stuhl4: Produkt = {
        bild: "images/TischeTisch1.png",
        preis: "200",
        titel: "Stuhl 4",
        beschreibung: "Das ist eine Beschreibung."
    };
    const stuhl5: Produkt = {
        bild: "images/TischeTisch1.png",
        preis: "250",
        titel: "Stuhl 5",
        beschreibung: "Das ist eine Beschreibung."
    };
    const stuhl6: Produkt = {
        bild: "images/TischeTisch1.png",
        preis: "300",
        titel: "Stuhl 6",
        beschreibung: "Das ist eine Beschreibung."
    };


    // In Array speichern
    export let artikelstühle: Produkt[] = [stuhl1, stuhl2, stuhl3, stuhl4, stuhl5, stuhl6];
    export let artikeltische: Produkt[] = [tisch1, tisch2, tisch3, tisch4, tisch5, tisch6];
}