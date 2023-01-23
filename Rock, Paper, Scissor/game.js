console.log("----- Welcome to my game-----\n Hope you will enjoy playing it\n");
console.log("Press the given key to play \n 'r' for rock\n 'p' for paper \n 's' for scissor")

let choices = ['r', 'p', 's'];
let p_points = 0;
let c_points = 0;
let chances = 5;

while (chances > 0) {
    console.log(`${chances} chance left...!`)

    let p = prompt("Enter your choice:")
    let c = choices[Math.floor(Math.random() * choices.length)];
    chances -= 1;

    if (c == 'r' && p == 'p') {
        console.log("Computer chosen 'Rock' and You chosen 'Paper'\n YOU WON A POINT...");
        p_points += 1;
    }

    else if (c == 'p' && p == 's') {
        console.log("Computer chosen 'Paper' and You chosen 'Scissor'\n YOU WON A POINT...");
        p_points += 1;
    }

    else if (c == 's' && p == 'r') {
        console.log("Computer chosen 'Scissor' and You chosen 'Rock'\n YOU WON A POINT...");
        p_points += 1;
    }

    else if (c == 'r' && p == 's') {
        console.log("Computer chosen 'Rock' and You chosen 'Scissor'\n COMPUTER WON A POINT...");
        c_points += 1;
    }

    else if (c == 'p' && p == 'r') {
        console.log("Computer chosen 'Paper' and You chosen 'Rock'\n COMPUTER WON A POINT...");
        c_points += 1;
    }

    else if (c == 's' && p == 'p') {
        console.log("Computer chosen 'Paper' and You chosen 'Rock'\n COMPUTER WON A POINT...");
        c_points += 1;
    }

    else if (c == p) {
        console.log("Tie\n");
    }

    else {
        console.log('Invalid Input... Please enter "r","p" and "s" only.')
    }
}

if (p_points > c_points) {
    console.log(`Congratulations, you have won this game with ${p_points} points...`)
}

else if (c_points > p_points) {
    console.log(`Sorry, you have lost this game with ${c_points} points...`)
}

else if (c_points == p_points) {
    console.log(`This game is tie with ${p_points - c_points} points...`)
}