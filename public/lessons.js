let incorrectProblems = 0
let correctProblems = 0
const totalProblems = 4
let attemptedQuestions = 0

var facts = document.getElementsByClassName("nondisplay-fact");
const nextBtn = document.getElementById('next-btn')
const returnBtn = document.getElementById('return-btn')
const factsArray = facts
const factLength = facts.length
let iterator = 0
function showFacts() {
    if (iterator < factLength) {
        facts[iterator].style.display = "block";
        iterator += 1;
    } else if (iterator => factLength) {
        hideFacts()
    }
    
}

function hideFacts() {
    const factsDiv = document.getElementById('lessons')
    for (const child of factsDiv.children) {
        child.style.display = "none"
    }
    displayQuiz()
}

function displayQuiz() {
    
    const quizDiv = document.getElementById('quizzes')
    quizDiv.classList.remove('nondisplay-question')
}

function verifyAnswer(event) {
    const button = event.target
    const question = button.id
    const answer = button.value
    const correctAnswer = button.name
    console.log(question, answer, correctAnswer)
    
    if (answer === correctAnswer) {
        alert("Correct!")
        correctProblems += 1
        attemptedQuestions += 1
        document.getElementById(`correct${question.trim()}`).classList.remove('hide')
    } else {
        alert("Incorrect!")
        incorrectProblems += 1
        document.getElementById(`incorrect${question.trim()}`).classList.remove('hide')
        attemptedQuestions += 1 
        
    }
    
    if (attemptedQuestions >= totalProblems) {
        finishQuiz()
    }
}

function finishQuiz() {
    const quizDiv = document.getElementById('quizzes')
    quizDiv.classList.add('nondisplay-question')
    
    const conclusionDiv = document.getElementById('quiz-conclusion')
    conclusionDiv.classList.remove('nondisplay-finish')
    
    const readout = document.getElementById('readout')
    const percentage = Math.round((correctProblems / totalProblems) * 100)
    readout.innerHTML = `You got ${correctProblems} out of ${totalProblems} correct, or ${percentage}%`
    
    nextBtn.addEventListener('click', () => {
        nextBtn.style.display = "none"
        returnBtn.style.display = "block"
    })
}

Array.from(document.getElementsByClassName('answers')).forEach(v=>{
    v.addEventListener('click', verifyAnswer)
})