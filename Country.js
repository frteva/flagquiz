class Country {
    #datas; #correctAnswers;
    constructor(data) {
        this.#datas = data;
        this.#correctAnswers = this.getCorrectAnswers(data.translations);
    }

    getCorrectAnswers(translations) {
        const preAnswers = Object.values(translations);
        const answersArray = [];
        preAnswers.forEach(e => {
            answersArray.push(e.common.toLowerCase());
        });
        const answers = new Set(answersArray);
        console.log(answers);
        return answers;
    }

    isCorrect(userAnswer) {
        console.log(userAnswer);
        const answer = userAnswer.toLowerCase();
        return this.#correctAnswers.has(answer);
    }

    flagRender() {
        document.querySelector("#flag").insertAdjacentHTML("afterbegin", `<h1>${this.#datas.flag}</h1>` );
    }
}

export default Country