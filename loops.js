// ==========================================
// Opdracht 1. Maak een for-loop die 3 keer "Hoera!" in de terminal logt
// Verwachte uitkomsten:
// Hoera!
// Hoera!
// Hoera!
// ==========================================
for (let i = 0; i < 3; i++) {
    console.log("Hoera!")
}


// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de vijfde loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
// ==========================================
for (let i = 0; i < 5; i++) {
    // i begint bij 0, dus 0, 1, 2, 3 geven "loop..." i < 4
    if (i < 4) {
        console.log("loop...");
        //    als i > 4 (in dit geval alleen 5)
    } else {
        console.log("klaar!");
    }
}

// ==========================================
// Opdracht 3. Maak een for-loop die van 0 tot 15 loopt. Voor ieder getal wordt in de console gelogd of het getal even of oneven is.
// Verwachte uitkomsten:
// 0 is even
// 1 is oneven
// 2 is even
// 3 is oneven
// .... etc.
// 15 is oneven
//loop voor 0-15
for (let i = 0; i < 16; i++) {
    //aparte if voor 0 want je kunt 0 niet delen
    if (i === 0) {
        console.log(i + " is even");
    }
    // even getallen gedeeld door twee houden niks over. de modulus operator "%" bekijkt of er na een deling iets over blijft.
    else if (i % 2 === 0) {
        console.log(i + " is even");
        //    in de andere gevallen zijn ze dus oneven
    } else {
        console.log(i + " is oneven")
    }


}

// Tip: een getal is oneven als je het door 2 deelt en er blijft nog iets over. Een getal is even als je het deelt door 2 en er blijft niets over..
// ==========================================


// ==========================================
// [BONUSOPDRACHT] - optioneel: maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan, en vanaf het getal 6 komt er >> voor ieder getal te staan.
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 9
// ==========================================
//  --> Maak een loop van 0 tot 9
// --> vanaf 0 komt er niks
//  --> tussen 3 en 6 komt er een > "if statement"
//  --> vanaf 6 komt er een >> "if statement"

//loop 0-9
for (let i = 0; i < 10; i++) {
    //als i 3 of groter en kleiner dan 6 is dan print je een > VOOR i
    if (i >= 3 && i < 6) {
        console.log("> " + i);
    //    als i 6 of groter is print je >> VOOR i
    }else if (i >= 6) {
        console.log(">> " + i);
    //    als i niet tussen 3 en groter dan 6 is print je alleen i
    }else {
        console.log(i);
    }
}