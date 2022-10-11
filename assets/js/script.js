/* Function countdown to set time for each question and show an alert when timepouts */
var timeLeft = 30;
var time = document.getElementById('timer');
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
    } else {
        time.innerHTML = timeLeft + ' seconds';
        timeLeft--;
    }
}
function doSomething() {
    alert("Reached out of time!");
}

//variables
var quiz = [];
quiz[0] = new Question("Gone with the wind", "Scarlet O'Hara", "test", "test");
quiz[1] = new Question("Star Wars", "Ioda", "test", "test");
quiz[2] = new Question("Star Treck", "Spock", "test", "test");
quiz[3] = new Question("Matrix", "Neo", "test", "test");
quiz[4] = new Question("Friday Thirteen", "Jason", "test", "test");
quiz[5] = new Question("Zombieland", "Woody Harrison", "test", "test");
quiz[6] = new Question("Ferrie Bueller's", "Mathew Brotherck", "test", "test");
quiz[7] = new Question("Taken", "Lian Nielsen", "test", "test");
quiz[8] = new Question("Halloween", "Janie Lee Curtis", "test", "test");
quiz[9] = new Question("Indiana Jones", "Harrison Ford", "test", "test");
quiz[10] = new Question("Always on my mind", "Elvis Presley", "test", "test");
quiz[11] = new Question("I always love you", "Whitney Houston", "test", "test");
quiz[12] = new Question("Sign of the times", "Harry style", "test", "test");
quiz[13] = new Question("Bad Guy", "Billie Eilish", "test", "test");
quiz[14] = new Question("Nessum Dorma", "Luciano Pavaroti", "test", "test");
quiz[15] = new Question("Anna", "Beatles", "test", "test");
quiz[16] = new Question("Sorrow", "David Bowie", "test", "test");
quiz[17] = new Question("Wake Up", "Arcade Fire", "test", "test");
quiz[18] = new Question("Stormy Weather", "Etta James", "test", "test");
quiz[19] = new Question("Watch under the bridge", "Adele", "test", "test");
quiz[20] = new Question("Gone with the wind", "1942", "1943", "1945");
quiz[21] = new Question("Star Wars", "1977", "1976", "1978");
quiz[22] = new Question("Star Treck", "1966", "1967", "1965");
quiz[23] = new Question("Matrix", "1999", "2001", "2000");
quiz[24] = new Question("Friday Thirteen", "1980", "1981", "1985");
quiz[25] = new Question("Zombieland", "2009", "2005", "2011");
quiz[26] = new Question("Ferrie Bueller's", "1986", "1981", "1987");
quiz[27] = new Question("Taken", "2008", "2007", "2005");
quiz[28] = new Question("Halloween", "1978", "1977", "1980");
quiz[29] = new Question("Indiana Jones", "1981", "1985", "1982");
quiz[30] = new Question("Always on my mind", "1973", "1974", "1977");
quiz[31] = new Question("I always love you", "1974", "1971", "1975");
quiz[32] = new Question("Sign of the times", "1987", "1997", "1991");
quiz[33] = new Question("Bad Guy", "2019", "2009", "2015");
quiz[34] = new Question("Nessum Dorma", "1986", "1985", "1989");
quiz[35] = new Question("Anna", "1963", "1973", "1971");
quiz[36] = new Question("Sorrow", "1973", "1971", "1963");
quiz[37] = new Question("Wake Up", "2005", "2004", "2000");
quiz[38] = new Question("Stormy Weather", "1960", "1933", "1963");
quiz[39] = new Question("Watch under the bridge", "2015", "2017", "2005");
var randomQuestion;
var answers = [];
var currentScore = 0;

document.addEventListener("DOMContentLoaded", function(event) { 
  btnProvideQuestion();
});

function Question(question,rightAnswer,wrongAnswer1,wrongAnswer2) {
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.wrongAnswer1 = wrongAnswer1;
    this.wrongAnswer2 = wrongAnswer2;
};

function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

function btnProvideQuestion() { 
  
	var randomNumber = Math.floor(Math.random()*quiz.length);
	randomQuestion = quiz[randomNumber];
  answers = [randomQuestion.rightAnswer, randomQuestion.wrongAnswer1, randomQuestion.wrongAnswer2];
  shuffle(answers);
  
  document.getElementById("question").innerHTML= randomQuestion.question;
  document.getElementById("answerA").value= answers[0];
  document.getElementById("answerA").innerHTML= answers[0];
  document.getElementById("answerB").value= answers[1];
  document.getElementById("answerB").innerHTML= answers[1];
  document.getElementById("answerC").value= answers[2];
  document.getElementById("answerC").innerHTML= answers[2];

}

function answerA_clicked() {
  var answerA = document.getElementById("answerA").value;
  	checkAnswer(answerA);
}

function answerB_clicked() {
		var answerB = document.getElementById("answerB").value;
  checkAnswer(answerB);
}
function answerC_clicked() {
  var answerC = document.getElementById("answerC").value;
  	checkAnswer(answerC);
}

function adjustScore(isCorrect) {
  debugger;
  if (isCorrect) {
    currentScore=currentScore+20;
  } else {
    if (currentScore > 0) {
      currentScore=currentScore+10;
  	}
  }
  document.getElementById("score").innerHTML = currentScore;
}

function checkAnswer(answer) {  
  if (answer == randomQuestion.rightAnswer) {
    adjustScore(true);
    btnProvideQuestion();
  } else { 
    alert("Loser!");
    adjustScore(false);
  }	  
}