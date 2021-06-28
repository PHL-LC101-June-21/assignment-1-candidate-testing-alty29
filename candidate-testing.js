
const input = require('readline-sync');
// TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName // 
let candidateName = " ";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let grade = " ";
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ['Sally Ride', 'true', "40", "Trajectory", '3'];
let candidateAnswers = [];
let status = " ";


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter Your Name: ")
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (i = 0; i < questions.length; i++) {
candidateAnswers.push(input.question(questions[i]));
}
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
for (i = 0; i < questions.length; i++){
  if (candidateAnswers[i].toUpperCase() == correctAnswers[i].toUpperCase()){
    grade++
  }
  graded = (((grade) / 5) * 100)
}
    if (graded >=80){
    candidateStatus = "PASSED";
  } else {
    candidateStatus = "FAILED";
  }
  return candidateStatus
}


function runProgram() {
  askForName();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
console.log (`
Your Name: ${candidateName}
1) Who was the first American Woman in Space? 
You Answered: ${candidateAnswers[0]}
Correct Answer: ${correctAnswers[0]}

2) True or false: 5000 meters = 5 kilometers.
You Answered: ${candidateAnswers[1]}
Correct Answer: ${correctAnswers[1]}

3) (5 + 3)/2 * 10 = ?
You Answered: ${candidateAnswers[2]}
Correct Answer: ${correctAnswers[2]}

4) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?
You Answered: ${candidateAnswers[3]}
Correct Answer: ${correctAnswers[3]}

5) What is the minimum crew size for the ISS?
You Answered: ${candidateAnswers[4]}
Correct Answer: ${correctAnswers[4]}

>>> Overall Grade: ${graded}% ${grade} out of 5 correct
>>> Status:  ${candidateStatus} <<<`)
}
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};