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
            description: "Das ist eine description.",
            category: "Tische"
        },
        {
            img: "images/eiscreme/strawberry-velvet.png",
            price: 3,
            name: "Strawberry Velvet",
            description: "Das ist eine description.",
            category: "Tische"
        },
        {
            img: "images/eiscreme/chocolate-chip.png",
            price: 3,
            name: "Chocolate Chip",
            description: "Das ist eine description.",
            category: "Tische"
        },
        {
            img: "images/eiscreme/vanilla-bourbon.png",
            price: 3,
            name: "Vanilla Bourbon",
            description: "Das ist eine description.",
            category: "Tische"
        },
        {
            img: "images/eiscreme/mango-mousse.png",
            price: 3,
            name: "Mango Mousse",
            description: "Das ist eine description.",
            category: "Tische"
        },
        {

            //>>> "Stühle"
            img: "images/Stühle/Stuhl1.png",
            price: 99,
            name: "Stuhl 1",
            description: "Das ist eine description.",
            category: "Stühle"
        },
        {
            img: "images/Stühle/Stuhl1.png",
            price: 100,
            name: "Stuhl 2",
            description: "Das ist eine description.",
            category: "Stühle"
        },
        {
            img: "images/Stühle/Stuhl1.png",
            price: 150,
            name: "Stuhl 3",
            description: "Das ist eine description.",
            category: "Stühle"
        },
        {
            img: "images/Stühle/Stuhl1.png",
            price: 200,
            name: "Stuhl 4",
            description: "Das ist eine description.",
            category: "Stühle"
        },
        {
            img: "images/Stühle/Stuhl1.png",
            price: 250,
            name: "Stuhl 5",
            description: "Das ist eine description.",
            category: "Stühle"
        },
        {
            img: "images/Stühle/Stuhl1.png",
            price: 300,
            name: "Stuhl 6",
            description: "Das ist eine description.",
            category: "Stühle"
        }

    ];


}
