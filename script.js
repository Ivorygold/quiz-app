const quizData = [
  {
    question: "how old is florida",
    a: "'10",
    b: "17",
    c: "26",
    d: "110",
    correct: "c",
  },
  {
    question: "what is the most used programing language in 2019",
    a: " java",
    b: "c",
    c: "python",
    d: "javascript",
    correct: "d",
  },
  {
    question: "who is the president of US",
    a: " florine pop",
    b: "Donald trump",
    c: "Ivan saldano",
    d: "micheal idiot",
    correct: "b",
  },
  {
    question: "what does HTML stand for",
    a: " Hyper mark-up language",
    b: "hyperText mark-up language",
    c: "Helicupter making long journey",
    d: "micheal idiot",
    correct: "b",
  },
];

const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  loadQuiz();
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener("click", () => {
  currentQuiz++;
  loadQuiz();
});
