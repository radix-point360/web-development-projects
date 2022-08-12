quizzdb = [
    {
	question:"Which of the follwoing is the language of Internet?",
	a:"HTML",
	b:"CSS",
	c:"JavaScript",
	d:"notepad",
    ans:"c"
    },

    {
    question:"Inside which HTML element do we put the JavaScript?",
    a:`&ltjavascript&gt`,
    b:"&ltjs&gt",
    c:"&ltsrc&gt",
    d:"&ltscript&gt",
    ans:"d"
    },

    {
    question:"Where is the correct place to insert a JavaScript?",
    a:"Both the head section and the body section are correct",
    b:"The head section",
    c:"The body section",
    d:"None of the above",
    ans:"a"
    },

    {
    question:"What will be the output of the following code?< script > document.write( typeof( '1' + 2) ); </ script >",
    a:"'boolean'",
    b:"'string'",
    c:"'number'",
    d:"None of the above",
    ans:"b"
    }


];

currentQuestion = 0;
score = 0;

const question  = document.querySelector("#main-question");
const option1   = document.querySelector("#option1");
const option2   = document.querySelector("#option2");
const option3   = document.querySelector("#option3");
const option4   = document.querySelector("#option4");   
const submit    = document.querySelector(".submit");
const display   = document.querySelector("#quiz-display");
const selected  = document.querySelectorAll(".selected");
const showScore = document.querySelector("#showScore");

let deSelectAnswer = () =>  {
    selected.forEach(selecteds =>  selecteds.checked = false);
}

let loadQuestion = () => {
   
    deSelectAnswer();
   
    question.innerHTML  = quizzdb[currentQuestion].question;
    option1.innerHTML   = quizzdb[currentQuestion].a;
    option2.innerHTML   = quizzdb[currentQuestion].b;
    option3.innerHTML   = quizzdb[currentQuestion].c;
    option4.innerHTML   = quizzdb[currentQuestion].d;
}   


loadQuestion();




const getSelected = () => {
    let answer;
    selected.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
        
    });
    return answer;
};



submit.addEventListener('click', () => {
    const answer = getSelected();
    
    if(answer){ 
        if (answer === quizzdb[currentQuestion].ans){score++}
        
        currentQuestion++;
        
        if(currentQuestion < quizzdb.length){
            loadQuestion();
        }
        else{
            
         showScore.innerHTML =  `<h3>you score ${score}/${quizzdb.length}</h3>
         <button class="restart" onclick="location.reload()">restart Quiz</button>`
         showScore.classList.remove('showArea');
        }
        
    }
    
})



