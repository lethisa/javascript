//////////
// QUIZ //
//////////

// private
(function() {
  // blueprint
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }
  // method
  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  };
  // method
  Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correct) {
      console.log('Correct answer');
    } else {
      console.log('Wrong answer. Try again !');
    }
  };

  // instance
  var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);
  var q2 = new Question('What is the name of this course teacher?', ['Jhon', 'Michael', 'Jonas'], 2);
  var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tediuos'], 2);

  var question = [q1, q2, q3];

  var n = Math.floor(Math.random() * question.length);
  question[n].displayQuestion();

  var answer = parseInt(prompt('Please select the correct answer'));
  question[n].checkAnswer(answer);
})();
