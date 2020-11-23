// create two functions that stores random number between 1 and 9 included
const x = () => Math.floor(Math.random() * 9 + 1);
const y = () => Math.floor(Math.random() * 9 + 1);

// create RedEx patter for the user response
const pattern = /^[1-9][1-9]$/g;

// create a function that ask the user a response, return the response
let userResponse = () => {
  // create a variable for store the response
  let response;
  // chech if the response is correct, or its null, or its empty
  do {
    response = parseInt(prompt(`Write your response`));
  } while (!pattern.test(response) && response == '');
  if (response) {
    return response;
  } else {
    return (response = 0);
  }
};

// crate a function that takes the two random number as callback functions
function multiplier(call1, call2) {
  // show the multiplication in console
  console.log(`Your multiplication:\n${call1} x ${call2} =`);
  let multiplicationResult = call1 * call2;
  let response = userResponse();
  if (response == multiplicationResult) {
    return console.log(`The response ${response} is good!`);
  } else if (response == '') {
    return;
  } else {
    return console.log(`Bad!`);
  }
}

function game() {
  multiplier(x(), y());
}

document.querySelector('#btnBtn').addEventListener('click', game);
