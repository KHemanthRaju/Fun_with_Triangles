const quizForms = document.querySelector(".quiz-form");
const submitAnswer = document.querySelector("#form-btn");
const scoreOutput = document.querySelector("#score");

const correctAnswers = ["90", "right angled"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const data = new FormData(quizForms);
    for(let value of data.values()){
    if(value === correctAnswers[index]){
        score = score + 1;
    }
    index = index + 1;
}
scoreOutput.innerText = "Your score is "+score;
}

submitAnswer.addEventListener("click",calculateScore);