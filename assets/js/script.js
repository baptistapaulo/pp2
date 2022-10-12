/* Function countdown to set time for each question and show an alert when timepouts */
var timeLeft = 30;
var time = document.getElementById('timer');
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();

    } else {
        if (timeLeft < 10) {
        time.innerHTML = '00:0' + timeLeft + ' seconds';
        } else {time.innerHTML = '00: ' + timeLeft + ' seconds';}
        timeLeft--;
    }
}
function doSomething() {
    alert("Reached out of time!");
}

//variables
var quiz = [];
quiz[0] = new Question("Who was the main actor in 'Gone with the wind'?", "Scarlet O'Hara","Robert Preston", "Frank Sinatra");
quiz[1] = new Question("Who was the main actor in 'Star Wars'", "Ioda", "Orson Welles", "Robert Redford");
quiz[2] = new Question("Who was the main actor in 'Star Treck'", "Spock", "Woody Allen", "Tommy Lee Jones");
quiz[3] = new Question("Who was the main actor in 'Matrix'", "Neo", "Paul Newman", "Bruce Lee");
quiz[4] = new Question("Who was the main actor in 'Friday Thirteen'", "Jason", "Johnny Depp", "Robert De Niro");
quiz[5] = new Question("Who was the main actor in 'Zombieland'", "Woody Harrison", "Robin Williams", "Matthew McConaughey");
quiz[6] = new Question("Who was the main actor in 'Ferrie Bueller's'", "Mathew Brotherck", "Tom Cruise", "Al Pacino");
quiz[7] = new Question("Who was the main actor in 'Taken'", "Lian Nielsen", "Alec Baldwint", "Charles Bronson");
quiz[8] = new Question("Who was the main actor in 'Halloween'", "Janie Lee Curtis", "Jack Nicholson", "Patrick Swayze");
quiz[9] = new Question("Who was the main actor in 'Indiana Jones'", "Harrison Ford", "Denzel Washington", "Mel Brooks");
quiz[10] = new Question("Who was the singer in 'Always on my mind", "Elvis Presley", "Jim Morrison", "Madonna");
quiz[11] = new Question("Who was the singer in 'I always love you", "Whitney Houston", "Beyoncé", "Barbra Streisand");
quiz[12] = new Question("Who was the singer in 'Sign of the times", "Harry style", "Freddie Mercury", "Paul McCartney");
quiz[13] = new Question("Who was the singer in 'Bad Guy", "Billie Eilish", "Kurt Cobain", "Eminem");
quiz[14] = new Question("Who was the singer in 'Nessum Dorma", "Luciano Pavaroti", "James Brown", "Nat King Cole");
quiz[15] = new Question("Who was the singer in 'Anna", "Beatles", "Abba", "Cher");
quiz[16] = new Question("Who was the singer in 'Sorrow", "David Bowie", "Michael Jackson", "Prince");
quiz[17] = new Question("Who was the singer in 'Wake Up", "Arcade Fire", "Iggy Pop", "Snoop Dogg");
quiz[18] = new Question("Who was the singer in 'Stormy Weather", "Etta James", "Louis Armstrong", "Nora Bayes");
quiz[19] = new Question("Who was the singer in 'Watch under the bridge", "Adele", "Amy Winehouse", "Kate Bush");
quiz[20] = new Question("In which year was the movie 'Gone with the wind' released?", "1942", "1943", "1945");
quiz[21] = new Question("In which year was the movie 'Star Wars' released?", "1977", "1976", "1978");
quiz[22] = new Question("In which year was the movie 'Star Treck' released?", "1966", "1967", "1965");
quiz[23] = new Question("In which year was the movie 'Matrix' released?", "1999", "2001", "2000");
quiz[24] = new Question("In which year was the movie 'Friday Thirteen' released?", "1980", "1981");
quiz[25] = new Question("In which year was the movie 'Zombieland' released?", "2009", "2005", "2011");
quiz[26] = new Question("In which year was the movie 'Ferrie Bueller's' released?", "1986", "1981", "1987");
quiz[27] = new Question("In which year was the movie 'Taken' released?", "2008", "2007", "2005");
quiz[28] = new Question("In which year was the movie 'Halloween' released?", "1978", "1977", "1980");
quiz[29] = new Question("In which year was the movie 'Indiana Jones' released?", "1981", "1985", "1982");
quiz[30] = new Question("In which year was the song 'Always on my mind' released?", "1973", "1974", "1977");
quiz[31] = new Question("In which year was the song 'I always love you' released?", "1974", "1971", "1975");
quiz[32] = new Question("In which year was the song 'Sign of the times' released?", "1987", "1997", "1991");
quiz[33] = new Question("In which year was the song 'Bad Guy' released?", "2019", "2009", "2015");
quiz[34] = new Question("In which year was the song 'Nessum Dorma' released?", "1986", "1985", "1989");
quiz[35] = new Question("In which year was the song 'Anna' released?", "1963", "1973", "1971");
quiz[36] = new Question("In which year was the song 'Sorrow' released?", "1973", "1971", "1963");
quiz[37] = new Question("In which year was the song 'Wake Up' released?", "2005", "2004", "2000");
quiz[38] = new Question("In which year was the song 'Stormy Weather' released?", "1960", "1933", "1963");
quiz[39] = new Question("In which year was the song 'Watch under the bridge' released?", "2015", "2017", "2005");
var randomQuestion;
var answers = [];
var currentScore = 0;

document.addEventListener("DOMContentLoaded", function(event) { 
provideQuestion();
});

function Question(question,rightAnswer,wrongAnswer1,wrongAnswer2) {
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.wrongAnswer1 = wrongAnswer1;
    this.wrongAnswer2 = wrongAnswer2;
};

function shuffle(array) {
	for(var x, y, z = array.length; z; x = parseInt(Math.random() * z), y = array[--z], array[z] = array[x], array[x] = y);
	return array;
};

function provideQuestion() { 
  
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
    provideQuestion();
  } else { 
    alert("Wrong Answer!");
    adjustScore(false);
  }	  
}

function imageScore() {
  if (timeLeft == -1) {
      clearTimeout(timerId);
  } else {
      time.innerHTML = timeLeft + ' seconds';
      timeLeft--;
  }
}
