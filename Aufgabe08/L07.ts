L07,

Daten aus Json laden
    JSON 
        verstehen
        erstellen
            JSON.stringify(myArray)

        laden > siehe screenshot mit blau markierungen
            synchron/asynchron (letzteres besser)
                fetch()
                    async await

                //generatePage()
        speichern
            muss passieren, bevor die seite geladen wird


LOCAL Storage
    Warenkorb funktional machen (wir starten mit) (7.2)
        Welcher Artikel wurde geklickt/ausgewählt?
            > set get
            set/get attribute: index im array
        Wie speichern?
            key-value
                index-menge
                "warenkorb" - array von geklickten Artikeln über JSON.stringify
        Warenkorbseite
            Daten Auslesen
                JSON dabei laden, index -> Artikel zuordnen
                artikel JSON.parsen
                array parsen

            Gesamtpreis berechnen

            Artikel mit Preis anzeigen
                s. Aufgabe 6
            Artikel löschen können 
                individuell
                alles




        event AudioListener hört darauf "ist da was?
        
        promise "ich verspreche du bekommst was zurück"
        by await warten wir machen pause bis die antwort zurückkommt
        in console.log speicher wir dann die response
