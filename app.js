var questionsAndAnswers = {
    "How many children do you have": 4,
    "What was Edward's first girlfriend called": 'chelsea',
    "Who was the heaviest baby when they were born (James, Charles, Sarah or Edward)": "edward",
    'Who is the heaviest NOW (James, Charles, Sarah or Edward)': 'james',
    "Who is this <br><img src='./images/baby-s.JPG' />": 'sarah',
    'Who was the naughtiest as a child (James, Charles, Sarah or Edward)': 'charles',
    'Who was the naughtiest as a teenager (James, Charles, Sarah or Edward)': 'sarah',
    "Which grandchild is this <br><img src='./images/william.jpg' />": 'william',
    "And this grandchild <br><img src='./images/matthew.jpg' />": 'matthew',
    "What was Sarah's favourite subject at secondary school": 'music',
    "What was James' favourite subject at secondary school – maths, science, english or PE?": 'science',
    "Who was Charles' best friend growing up (first and last name)" : 'ed moore',
    "Sarah's childhood best friend" : 'katie hall',
    "And Edward's childhood best friend?": "ben spurr",
    'And finally, who is your favourite child?': 'sarah'
}

var questions = Object.keys(questionsAndAnswers);
var answers = Object.values(questionsAndAnswers); 
var questionCount = 0;
var correctAnswerCount = 0;

askQuestion();

function askQuestion() {
    var question = document.getElementById("question");
    question.innerHTML = `${questions[questionCount]}?`;
    questionCount++;
    document.getElementById("questionCount").innerHTML = questionCount;
}

function checkAnswer() {
    const motherAnswer = document.getElementById('answer').value;
    const actualAnswer = answers[questionCount - 1];
    const result = motherAnswer.toLowerCase() == actualAnswer ? "correct" : "incorrect";
    displayResults(result);
    document.getElementById('answer').value = '';
}

function correctAnswer(){
    correctAnswerCount ++;
}

function displayResults(result) {
    if (questionCount == questions.length) {
        document.getElementById('questionArea').style.display = 'none';
        finalScore();
    }
    const resultDisplay = document.getElementById('result');
    var message = '';
    var correctAnswerResponses = ['Correct! Keep up the good work!', 'Nice work! You got this!', "Bingo! Great mothering!", "You got it right, getting those mother points in the bank!"];
    var wrongAnswerResponses = ['Eh oh, not quite right…', 'Unlucky…', "D'oh!", "Gah, incorrect!"];

    let randomNumber = Math.floor(Math.random() * correctAnswerResponses.length);
    if (result == 'correct'){
        message = `✅ ${correctAnswerResponses[randomNumber]}`;
        correctAnswerCount++;
    } 
    else {
        message = `😭 ${wrongAnswerResponses[randomNumber]} The answer was ${answers[questionCount -1]}!`;
    }
    resultDisplay.innerHTML = message;

}

function finalScore() {
    const scoreElement = document.getElementById('final-score');
    scoreElement.style.display = 'block';
    var finalScoreMessage = correctAnswerCount > 7 ? 'You are a wonderful mother, congratulations!!' : 'You are a below-par mother, but we still love you!';
    scoreElement.innerHTML = `💕 ${finalScoreMessage} 💕 You got ${correctAnswerCount}/${questionCount}`;
}


