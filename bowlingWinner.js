// You are given two 0-indexed integer arrays player1 and player2, that represent the number of pins that player 1 and player 2 hit in a bowling game, respectively.

// The bowling game consists of n turns, and the number of pins in each turn is exactly 10.

// Assume a player hit xi pins in the ith turn. The value of the ith turn for the player is:

// 2xi if the player hit 10 pins in any of the previous two turns.
// Otherwise, It is xi.
// The score of the player is the sum of the values of their n turns.

// Return

// 1 if the score of player 1 is more than the score of player 2,
// 2 if the score of player 2 is more than the score of player 1, and
// 0 in case of a draw.

// Input: player1 = [4,10,7,9], player2 = [6,5,2,3]
// Output: 1
// Explanation: The score of player1 is 4 + 10 + 2*7 + 2*9 = 46.
// The score of player2 is 6 + 5 + 2 + 3 = 16.
// Score of player1 is more than the score of player2, so, player1 is the winner, and the answer is 1.

const bowlingWinner = (player1, player2) => {
    let playerScore1 = 0;
    let playerScore2 = 0;

    const getPlayerScore = (scores) => {
        let sum = 0;
        for(let i = 0; i<scores.length; i++){
            if(scores[i-1] === 10 || scores[i-2] === 10){
                sum+= 2*scores[i];
            }else{
                sum+=scores[i];
            }
        }
        return sum;
    }

    playerScore1 = getPlayerScore(player1);
    playerScore2 = getPlayerScore(player2);

    if(playerScore1>playerScore2){
        return 1;
    }else if(playerScore1 === playerScore2){
        return 0;
    }else {
        return 2;
    }
};