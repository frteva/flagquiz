import Country from "./Country.js";

class Game {
    #score = 0;
    #dataCountries;
    #index = 0;
    #currentCountry;
    constructor(data) {
        this.#dataCountries = data;
        this.#currentCountry = new Country(data[this.#index]);
        this.#currentCountry.flagRender();
    }

    addPointOrNot(userAnswer) {
        if(this.#currentCountry.isCorrect(userAnswer)) {
            this.#score += 1;
        }
    }

    getScore() {
        return this.#score;
    }

    isGameFinished() {
        if(this.#index >= this.#dataCountries.length) {
            alert("Game over! Your score is " + this.#score);
            console.log("game is finished");
            return true;
        } else {
            return false;
        }
    }

    nextCountry() {
        if(!this.isGameFinished()) {
            this.#index += 1;
            this.#currentCountry = new Country(this.#dataCountries[this.#index]);
            this.#currentCountry.flagRender();
        }
    }

    scoreRender() {
        document.querySelector("#score").innerHTML="";
        document.querySelector("#score").insertAdjacentHTML("afterbegin", `<h1>Score: ${this.#score}</h1>` );
    }

}

export default Game