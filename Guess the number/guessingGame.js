console.log("Welcome to Guess the number");"
console.log('You have to guess a number within 100\n The player who take maximum chance "loses" the game.')


const r_number = (Math.floor(Math.random() * 100) + 1);

let c_number = false;


let count = 1;

while (!c_number) {
  let input = prompt("Enter a random number");

  if (input < r_number) {
    console.log("Your number is smaller than the required number")
  }

  else if (input > r_number) {
    console.log("Your number is greater than the required number")
  }

  else if (input == r_number) {
    console.log("You got it. You did well!!")
    break;
  }

  count++;
}

console.log(`Your total score is ${count}`);