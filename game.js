
const userScoreElement = document.getElementById('user-score');
const compScoreElement = document.getElementById('comp-score');
const messageElement = document.getElementById('msg');
const resultElement = document.getElementById('result');
const rockDiv = document.querySelector('.rock');
const paperDiv = document.querySelector('.paper');
const scissorDiv = document.querySelector('.scissor');

let userScore = 0;
let compScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';
    }
    if ((userChoice === 'rock' && computerChoice === 'scissor') ||
        (userChoice === 'scissor' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')) {
        return 'win';
    }
    return 'lose';
}

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);

    if (result === 'win') {
        userScore++;
        messageElement.textContent = 'You win!';
        messageElement.style.color = 'green'; 
    } else if (result === 'lose') {
        compScore++;
        messageElement.textContent = 'You lose!';
        messageElement.style.color = 'red'; 
    } else {
        messageElement.textContent = 'It\'s a draw!';
        messageElement.style.color = '#1a202c'; 
    }

    userScoreElement.textContent = userScore;
    compScoreElement.textContent = compScore;


    resultElement.textContent = `You chose ${userChoice}, Computer chose ${computerChoice}.`;
}

rockDiv.addEventListener('click', () => playGame('rock'));
paperDiv.addEventListener('click', () => playGame('paper'));
scissorDiv.addEventListener('click', () => playGame('scissor'));
