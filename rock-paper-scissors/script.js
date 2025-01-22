let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // Determine the winner
    let winner = '';
    if (playerChoice === computerChoice) {
        winner = 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        winner = 'You win!';
        playerScore++;
    } else {
        winner = 'Computer wins!';
        computerScore++;
    }

    // Update rounds
    roundsPlayed++;

    // Update the UI
    document.getElementById('player-choice').innerText = `You chose: ${playerChoice}`;
    document.getElementById('computer-choice').innerText = `Computer chose: ${computerChoice}`;
    document.getElementById('winner').innerText = `Winner: ${winner}`;
    document.getElementById('player-score').innerText = `Player: ${playerScore}`;
    document.getElementById('computer-score').innerText = `Computer: ${computerScore}`;
    document.getElementById('rounds-played').innerText = `Rounds Played: ${roundsPlayed}`;
}
