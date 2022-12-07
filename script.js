const quizData = [
    {
        question: "how many pepele in the world",
        a: "6752025554",
        b: "6658552221",
        c: "7000245665",
        d: "8502558544",
        correct: "d"
    },    {
        question: "what is the mast used programing langueg in 2021",
        a: "pyton",
        b: "java",
        c: "c#",
        d: "java script",
        correct: "a"
    },    {
        question: "what is the president in US",
        a: "Tromp",
        b: "Poutin",
        c: "Baiden",
        d: "Null",
        correct: "c"
    },    {
        question: "what years was java script",
        a: "1975",
        b: "1994",
        c: "1993",
        d: "1997",
        correct: "b"
    },    {
        question: "what container computer of member",
        a: "RAM-CPU-Power-MainBoard-GPU",
        b: "CPU-Hard-Display-cash",
        c: "RAM-CPU-GPU-Power-",
        d: "null",
        correct: "a"
    }, {
        question: "how meny horurs power lamborgini ",
        a: "450PW",
        b: "520PW",
        c: "680PW",
        d: "700PW",
        correct: "d"}
]

const quiz = document.querySelector(".quiz-container")
const questionE1 =document.querySelector(".quiz-header h2");
const submitBtn = document.querySelector("button");
const answerE1s = document.querySelectorAll(".answer");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let indexQuiz = 0;
let score = 0;

function loadQuiz(){
    deselectAnswer()
    const currentQuizData = quizData[indexQuiz];

    questionE1.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}
loadQuiz();


function getSelected(){
    let answ = undefined

    answerE1s.forEach((answerE1)=>{
        if(answerE1.checked){
            answ = answerE1.id
        }
    });
    return answ
}

function deselectAnswer(){
    answerE1s.forEach((answerE1)=>{
        answerE1.checked = false
    });
}


submitBtn.addEventListener('click',()=>{
    const answer = getSelected()
   
    if(answer){
        if(answer === quizData[indexQuiz].correct){
            score++;
        }
    indexQuiz++
    if(indexQuiz<quizData.length){
    loadQuiz();
    }else{
         quiz.innerHTML = `<h2>you are answered correctly ${score} / ${quizData.length} question</h2>
          <button onclick = location.reload()>Reload</button>`
        }
    }
})



