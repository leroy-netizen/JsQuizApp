let quiz = document.getElementsByClassName("quiz");
let selection = Array.from(document.getElementsByClassName("text")); // Convert HTML collection to array
console.log(selection);

// initializing variables (state)

var score = 0;
var currentQuiz = {};
var quizCount = 0;
var allQuizes = [];
var acceptAnswers = true;

const quizes = [
  {
    quiz: "If we want to set the style for just one element, which css selector will we use?(1)",
    selection1: "id",
    selection2: "text",
    selection3: "class",
    selection4: "name",
    answer: 1,
  },
  {
    quiz: " JavaScript is the programming language of the _____.(1)",
    selection1: "Web",
    selection2: "Mobile",
    selection3: "Desktop",
    selection4: "Server",
    answer: 1,
  },
  {
    quiz: "Which of the following statement(s) is true about the JavaScript? (1)",
    selection1:
      "It is a scripting language used to make the website interactive",
    selection2: "It is a markup language of Java to develop the webpages",
    selection3:
      "It is an advanced version of Java for Desktop and Mobile application development",
    selection4: "All of the above",
    answer: 1,
  },
  {
    quiz: "In which HTML element, we put the JavaScript code?(4)",
    selection1: "<javascript>...</javascript>",
    selection2: "<js>...</js>",
    selection3: "<script>...</script>",
    selection4: "<css>...</css>",
    answer: 4,
  },
  {
    quiz: "Which symbol is used separate JavaScript statements?(4)",
    selection1: "Comma (,)",
    selection2: "Colon (:)",
    selection3: "Hyphen (_)",
    selection4: "Semicolon (;)",
    answer: 4,
  },
  {
    quiz: " JavaScript ignores?(4)",
    selection1: "spaces",
    selection2: "newlines",
    selection3: "tabs",
    selection4: "All of the above",
  },
  {
    quiz: " Which JavaScript method is used to access an HTML element by id?(3)",
    selection1: "elementById(id)",
    selection2: "getElement(id)",
    selection3: "getElementById(id)",
    selection4: "getElementById()",
    answer: 3,
  },
  {
    quiz: " HTML is considered as ______ ? (4)",
    selection1: "Programming language",
    selection2: "OOP language",
    selection3: "High level language",
    selection4: "Markup language",
    answer: 4,
  },
  {
    quiz: "Which type of JavaScript language is ___(1)",
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
