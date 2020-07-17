namespace Prüfungsaufgabe {

    //Erstelle Interface
    export interface Product {
        img: string;
        price: number;
        name: string;
        description: string;
        category: string;
    }

    export let data: Product[] = [
        {
            img: "images/eiscreme/chocolate-brownie.png",
            price: 3,
            name: "Chocolate Brownie",
            description: "Brownie frisch gebacken und zerkrümelt in einem cremigen Schokoladeneis.",
            category: "Tische"
        },
        {
            img: "images/eiscreme/strawberry-velvet.png",
            price: 3,
            name: "Strawberry Velvet",
            description: "Fruchtige Erdbeeren. Ganze Stückchen und wenig Zuckerzusatz.",
            category: "Tische"
        },
        {
            img: "images/eiscreme/chocolate-chip.png",
            price: 3,
            name: "Chocolate Chip",
            description: "Die perfekte Mischung aus Cookie und Dough mit knackigen Schokostücken.",
            category: "Tische"
        },
        {
            img: "images/eiscreme/vanilla-bourbon.png",
            price: 3,
            name: "Vanilla Bourbon",
            description: "Zart im Geschmack, mit Bourbon Vanille von der Karibikinsel Guadeloupe.",
            category: "Tische"
        },
        {
            img: "images/eiscreme/mango-mousse.png",
            price: 3,
            name: "Mango Mousse",
            description: "Frische, sonnenreif geerntete Mangos zaubern ein fruchtiges Erlebnis.",
            category: "Tische"
        },
        {

            //>>> "Stühle"
            img: "images/toppings/strawberries.png",
            price: 1.50,
            name: "Erdbeerscheiben",
            description: "Frische Erdbeeren, geschnitten.",
            category: "Stühle"
        },
        {
            img: "images/toppings/streusel.png",
            price: 2,
            name: "Schokostreusel",
            description: "Dunkle Schokoladenstreusel.",
            category: "Stühle"
        },
        {
            img: "images/toppings/syrup.png",
            price: 2.50,
            name: "Schokosauce",
            description: "Leckere Schokoladensauce.",
            category: "Stühle"
        },

        //>>> "Waffel/Becher"
        {
            img: "images/Behälter/Becher.png",
            price: 0.50,
            name: "Becher",
            description: "Pappbecher aus recyceltem Material.",
            category: "Behälter"
        },
        {
            img: "images/Behälter/Waffel.png",
            price: 0.50,
            name: "Waffel",
            description: "Knusprige Waffel.",
            category: "Behälter"
        }
    ];
}
