import { shuffle } from "lodash";
import Game from "./Game.js";

highscoreRender();

const getCountries = async () => {
    const apiUrl = "https://restcountries.com/v3.1/all";
    const res = await fetch(apiUrl);

    if(!res.ok) {
        throw new Error("Cannot reach API");
    }

    const resData = await res.json();
    const data = shuffle(resData);

    const game = new Game(data);

    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        const userAnswer = document.querySelector("input").value;
        if(!game.isGameFinished()) {
            game.addPointOrNot(userAnswer);
            game.scoreRender();
            game.nextCountry();
            if(localStorage.getItem("highscore") < game.getScore()) {
                localStorage.setItem("highscore", game.getScore());
                highscoreRender();
            };
        }
        document.querySelector("form").reset();
    })

}

function highscoreRender() {
    document.querySelector("#highscore").innerHTML="";
    document.querySelector("#highscore").insertAdjacentHTML("afterbegin", `<h1>Score: ${localStorage.getItem("highscore")}</h1>` );
}


getCountries();