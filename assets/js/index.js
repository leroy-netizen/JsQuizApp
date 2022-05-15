let quiz = document.getElementById("quiz");
let choices = Array.from(document.getElementsByClassName("text")); // Convert HTML collection to array
// console.log(choices);

// initializing variables (state)

let score = 0;
let currentQuiz = {};
let quizCount = 0;
let quizesLeft = [];
let allowUserAnswer = false; //cannot answer until page fully loaded;

const quizes = [
  {
    quiz: "If we want to set the style for just one element, which css selector will we use?",
    selection1: "id",
    selection2: "text",
    selection3: "class",
    selection4: "name",
    answer: 1,
  },
  {
    quiz: " JavaScript is the programming language of the _____.",
    selection1: "Web",
    selection2: "Mobile",
    selection3: "Desktop",
    selection4: "Server",
    answer: 1,
  },
  {
    quiz: "Which of the following statement(s) is true about  JavaScript? ",
    selection1:
      "It is a scripting language used to make the website interactive",
    selection2: "It is a markup language of Java to develop the webpages",
    selection3:
      "It is an advanced version of Java for Desktop and Mobile application development",
    selection4: "All of the above",
    answer: 1,
  },
  {
    quiz: "In which HTML element, we put JavaScript code?",
    selection1: "<javascript>...</javascript>",
    selection2: "<js>...</js>",
    selection3: "<script>...</script>",
    selection4: "<css>...</css>",
    answer: 4,
  },
  {
    quiz: "Which symbol is used to separate JavaScript statements?",
    selection1: "Comma (,)",
    selection2: "Colon (:)",
    selection3: "Hyphen (_)",
    selection4: "Semicolon (;)",
    answer: 4,
  },
  {
    quiz: " JavaScript ignores?",
    selection1: "spaces",
    selection2: "newlines",
    selection3: "tabs",
    selection4: "All of the above",
  },
  {
    quiz: " Which JavaScript method is used to access an HTML element by id?",
    selection1: "elementById(id)",
    selection2: "getElement(id)",
    selection3: "getElementById(id)",
    selection4: "getElementById()",
    answer: 3,
  },
  {
    quiz: " HTML is considered as ______ ? ",
    selection1: "Programming language",
    selection2: "OOP language",
    selection3: "High level language",
    selection4: "Markup language",
    answer: 4,
  },
  {
    quiz: "Which type of JavaScript language is ___",
    selection1: "Object-Oriented",
    selection2: "Object-Based",
    selection3: "Assembly-language",
    selection4: "High-level",
    answer: 1,
  },
  {
    quiz: "In the JavaScript, which one of the following is not considered an error?",
    selection1: "Syntax error",
    selection2: "Missing of semicolons",
    selection3: "Division by zero",
    selection4: "Missing of Bracket",
    answer: 3,
  },
];

const MAX_QUIZES = 7;
const CORRECT_SCORE_POINTS = 5;

startPlaying = () => {
  quizCount = 0;
  score = 0;
  quizesLeft = [...quizes]; //spread through the quizes array. creates a copy of the array
  //   console.log(quizesLeft);
  getNewQuiz();
};
// startPlaying();

getNewQuiz = () => {
  if (quizesLeft.length === 0 || quizCount > MAX_QUIZES)
    return window.location.assign("/pages/score/score.html");
  quizCount++;
  const quizIndex = Math.floor(Math.random() * quizesLeft.length);

  currentQuiz = quizesLeft[quizIndex];
  quiz.innerText = currentQuiz.quiz;

  choices.forEach((selection) => {
    const value = selection.dataset["value"];
    selection.innerText = currentQuiz["selection" + value];
  });
  quizesLeft.splice(quizIndex, 1); // get rid of the used question
  allowUserAnswer = true;
};
choices.forEach((selection) => {
  selection.addEventListener("click", (e) => {
    // console.log(e.target);
    if (!allowUserAnswer) return;
    allowUserAnswer = false;
    const userAns = e.target;
    const selectedAns = userAns.dataset["value"];

    //   check for correct response and bind a class
    const bindClass =
      selectedAns == currentQuiz.answer ? "correct" : "incorrect";

    console.log(bindClass);
    userAns.parentElement.classList.add(bindClass); //bind the incorrect or correct class
    // console.log(selectedAns == currentQuiz.answer);

    setTimeout(() => {
      userAns.parentElement.classList.remove(bindClass);
      getNewQuiz(); //after answering a quiz, get a new one
    }, 1200);
  });
});
startPlaying();
