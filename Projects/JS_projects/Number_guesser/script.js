let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10)
}

function compareGuesses(human_guess, comp_guess, targetnumber) {
    let diff_human = Math.abs(human_guess - targetnumber);
    let diff_comp = Math.abs(comp_guess - targetnumber);

    if (human_guess < 0 || human_guess > 9) {
        alert('The number entered is out of range!');
    }

    if (diff_human === diff_comp){
        return true;
    } else if (diff_human > diff_comp) {
        return false;
    } else if (diff_human < diff_comp) {
        return true;
    }
    
}

function updateScore(winner) {
    if (winner === 'human'){
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
}

function advanceRound() {
    currentRoundNumber += 1;
}