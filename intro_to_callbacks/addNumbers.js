
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Give me num: ", function (numStr) {
      const parsedResponse = parseInt(numStr);
      sum += parsedResponse;
      numsLeft --;
      console.log(sum);
      addNumbers(sum, numsLeft, completionCallback);
    });
  } else {
    completionCallback(sum);
    readline.close();
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));