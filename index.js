var readlineSync = require("readline-sync");

var score =0;
var userName = readlineSync.question("What's your name? ");
console.log("Welcome " +userName + " How much do you know about Mahesh babu? ");

function play(question, answer)
{
  var userName = readlineSync.question(question);
  
  if(userName === answer)
  {
    console.log("Right!");
    score++;
  }
  else
  {
    console.log("Wrong!");
  }
  console.log("your current score is " +score);
  console.log("____________________");
}
var questions = [
  {
    question:'What is his first movie\na)rajkumarudu\nb)pokiri\n',
    answer: "a",
  },
  {
    question: 'When did Mahesh made his debut as a hero?\na)1997\nb)1999\n',
    answer: "b",
  },
  {
    question: 'What is his age?\na)45\nb)35\n',
    answer: "a",
  },
  {
    question: 'What is his birthday month?\na)march\nb)august\n',
    answer: "b",
  },
  {
    question: 'Who is his Father?\na)krishna\nb)surya\n',
    answer: "a"
  },
  {
    question: 'What is his wife name?\na)shilpa\nb)namratha\n',
    answer: "b",
  },
  {
    question: 'How many children does he have?\na)1\nb)2\n',
    answer: "b"
  },
  {
    question: 'What was his last movie?\na)bharathAneNenu\nb)sariLeruNeekevvaru\n',
    answer: "b",
  }
]

for(var i=0; i<questions.length; i++)
{
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
  
}
 console.log("your final score is " +score);
if(score >= 5)
 {
   console.log("The Maximum score is 8 and your score is " +score + " WOW " +userName +"!!You know a lot about him!")
 }
 else
 {
   console.log("The Maximum score is 8 and your score is " +score + " I think you dont know much about him " +userName + ".That's cool!!")
 } 