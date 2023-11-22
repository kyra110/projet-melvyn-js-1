import { prompt } from "./prompt.js";

const targetNumber = Math.floor(Math.random() * 101);
let counterattempt = 0;
function playGetNumber() {
  const getTheNumber = Number(prompt("Entre 1 et 100 Trouver Le nombre:"));
  counterattempt++;
  if (getTheNumber > targetNumber) {
    console.log("Le numéro gagnant est plus petit");
  }
  if (getTheNumber < targetNumber) {
    console.log("Le numéro gagnant est plus grand");
  }
  //Erreurs
  if (getTheNumber > 100) {
    console.log("Vous devez tapez un nom entre 0 & 100");
  }
  if (getTheNumber < 0) {
    console.log("Vous devez tapez un nom entre 0 & 100");
  }
  if (getTheNumber == targetNumber) {
    console.log(
      `Bravo vous avez trouvez le bon numéro en : ${counterattempt} coups`
    );
    const rePlay = prompt("Voulez-vous reoujer? (O/N)");
    if (rePlay == "O" || rePlay == "o") {
      playGetNumber();
    }
    if (rePlay == "N" || rePlay == "n") {
      console.log("Merci d'avoir Joué");
    }
  } else {
    playGetNumber();
  }
}

playGetNumber();
