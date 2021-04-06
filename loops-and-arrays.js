// ==========================================
// Opdracht 1
// Schrijf een script dat iedere naam in bovenstaande array vervangt door een koosnaampje, door er -"je" achter te plakken.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 namen zou bevatten!
// ==========================================
//stappenplan:
//  - print de originele array
//  - verander een waarde in de array
//  - verander alle waarden in de array

//print de originele array
const names = ["Henk", "Piet", "Fred", "Joop"];
console.log(names);

//verander een waarde in de array
// names[0] = names[0] + "je"
// console.log(names[0]);

//verander alle waarden in de array
//door een for loop te maken met de lengte van de array wordt deze flexibel.
for (let i = 0; i < names.length; i++) {
    //voor i plaatsen in de array, voeg "je" toe aan de waarde
    names[i] = names[i] + "je"
    }
//console.log buiten de loop anders print hij elke stap.
console.log(names);
// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(names) geeft: ["Henk", "Piet", "Fred", "Joop"]
// Na jouw script zie je de aangepaste waardes:
// console.log(names) geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]


// ==========================================
// Opdracht 2
// Schrijf een script dat ieder getal in bovenstaande array met 3 vermenigvuldigd.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

//stappenplan:
//   - print de originele array
//   - pas elke waarde in de array aan
//   - print de aangepaste array

const numbers = [2, 4, 5, 29, 38];
//print de originele array
console.log(numbers);
// pas elke waarde in de array aan
//voor elke waarde in de hele lengte van de array, vermenigvuldig met 3
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 3;
    }
//print de nieuwe array
console.log(numbers);
// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(numbers) geeft: [2, 4, 5, 29, 38];
// Na jouw script zie je de aangepaste waardes:
// console.log(numbers) geeft: [ 6, 12, 15, 87, 114 ];


// ==========================================
// Opdracht 3
// Schrijf een script dat voor de maat van ieder vierkant in onderstaande array het volume uitrekent.
// Het volume is lengte x breedte x hoogte
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

//stappenplan
// maak een nieuwe array met de waardes van squares, noem deze volume
//print de originele volume array
//roep de waardes van volume array een voor een op
//bereken het volume (lengte * breedte * hoogte) met de opgevraagde waarde
// waarde[1] * waarde[1] * waarde[1]
//herhaal dit voor de hele array

const squares = [30, 2, 8, 24, 11];
//maak een nieuwe array aan met dezelfde getallen.
let volume = squares;
console.log(volume);

//voor elk getal in de array volume, vermenigvuldig het getal drie keer met zichzelf
for (let i = 0; i < volume.length; i++) {
    volume[i] = volume[i] * volume[i] * volume[i];
}
console.log(volume);
// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(numbers) geeft: [30, 2, 8, 24, 11];
// Na jouw script zie je de aangepaste waardes:
// console.log(numbers) geeft: [27000, 8, 512, 13824, 1331];
