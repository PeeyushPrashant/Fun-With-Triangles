const quizForm = document.querySelector("#quiz-form");
const submitBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");

const corectAnswers = ['90°', 'right angled', 'one right angle', '12, 16, 20', 'Equilateral triangle', '85°', '10°', 'a + b + c ', 'no', '45°'];

submitBtn.addEventListener("click", calculateScore);

function calculateScore(){
    let score=0;
    let index=0;
    const data= new FormData(quizForm);
   for(let value of data.values()){
       if(value=== corectAnswers[index])
           score=score+1;
    index=index+1;
   }
   output.innerText = "Your score is " + score;
}