const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Wie was de eerste wereldkampioen coureurs?',
        choice1: 'Nino Farina',
        choice2: 'Giuseppe Farina',
        choice3: 'Alfa Romeo',
        choice4: 'Kurtis Kraft',
        answer:2,
    },
    {
        question: 'In welk jaar werd het World Drivers Championship voor het eerst uitgereikt?',
        choice1: '1947',
        choice2: '1948',
        choice3: '1949',
        choice4: '1950',
        answer:4,
    },
    {
        question: 'Op welk circuit vond de eerste WK-race plaats?',
        choice1: 'Silverstone',
        choice2: 'Monaco',
        choice3: 'Bremgarten',
        choice4: 'Indianapolis',
        answer:1,
    },
    {
        question: 'Wie zijn de enige teams die beide kampioenschappen in hun enige seizoen hebben gewonnen?',
        choice1: 'Toro Rosso',
        choice2: 'McLaren',
        choice3: 'Brawn GP',
        choice4: 'Sahara Force India',
        answer:3,
    },
    {
        question: 'Wie was de eerste coureur die 7 Wereldkampioenschappen won?',
        choice1: 'Lewis Hamilton',
        choice2: 'Max Verstappen',
        choice3: 'Sebastian Vettel',
        choice4: 'Michael Schumacher',
        answer:4,
    },
    {
        question: 'Hoe oud was Max Verstappen toen hij de jongste coureur werd die een F1-race startte?',
        choice1: '16',
        choice2: '17',
        choice3: '18',
        choice4: '19',
        answer:2,
    },
    {
        question: 'In welk land pakte Lewis Hamilton zijn eerste overwinning?',
        choice1: 'Canada',
        choice2: 'Amerika',
        choice3: 'Indonesië',
        choice4: 'Turkije',
        answer:1,
    },
    {
        question: 'Wie won de Grand Prix van Monaco 2004?',
        choice1: 'Sebastian Vettel',
        choice2: 'Jarno Trulli',
        choice3: 'Michael Schumacher',
        choice4: 'Fernando Alonso',
        answer:2,
    },
    {
        question: 'Op welk circuit behaalde Pierre Gasly zijn eerste overwinning?',
        choice1: 'Hungaroring',
        choice2: 'Zandvoort',
        choice3: 'Istanbul',
        choice4: 'Monza',
        answer:4,
    },
    {
        question: 'Hoeveel Wereldkampioenschappen heeft Ayrton Senna gewonnen?',
        choice1: 'Geen',
        choice2: 'Een',
        choice3: 'Twee',
        choice4: 'Drie',
        answer:4,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('einde.html')
    }

    questionCounter++
    progressText.innerText = `Vraag ${questionCounter} op ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()