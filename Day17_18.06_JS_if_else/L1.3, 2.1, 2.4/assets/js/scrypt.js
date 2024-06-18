//Level 1.3

function alterCheck() {
    event.preventDefault();
    const alterInput = Number(document.getElementById("age").value);
    const infoRauch = document.querySelector(".infoRauch");
    
    if (alterInput >= 18) {
        infoRauch.innerHTML = "Darfst du  rauchen"
    }
    else {
        infoRauch.innerHTML = "Darfst du  nicht rauchen"
    }
}


// Level 2.1

function spielPunkte(g1, a1, g2, a2 ){
   let nameOne = "John";
    let nameTwo = "Mike";

    let scorePlayerOne = (a1 * 5) + g1;
    let scorePlayerTwo = (a2 * 5) + g2;

    console.log(`${nameOne} score:  ${scorePlayerOne} und ${nameTwo} score: ${scorePlayerTwo} `);
   
    if (scorePlayerOne > scorePlayerTwo)
        console.log(`${nameOne} gewwint`);
        
        else if (scorePlayerOne < scorePlayerTwo) {
        console.log(`${nameTwo} gewwint`);
    }
        
    else {
        console.log(`Unentschieden.`);
            }
}
 spielPunkte(228, 22, 168, 34);


// Level 2.4
 
function berechen(a,b){
    let summe = a + b;
  
    if (a === b) {
        console.log("Summe 5");
    }
    else {
        console.log(summe);  
    }
}
berechen(3,3)

