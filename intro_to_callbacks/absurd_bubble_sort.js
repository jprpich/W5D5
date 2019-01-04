const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function askIfGreaterThan(el1, el2, cb) {
  reader.question(`Is ${el1} greater than ${el2} (yes/no)?`, function(res) {
    if (res === "y") {
      cb(true);
    } else {
      cb(false);
    }
  });
}

// askIfGreaterThan(5, 10, function(answer) {
//   if (answer) {
//     console.log('Great! You said el1 > el2.');
//   } else {
//     console.log('OK! You said el2 > el1.');
//   }
// });

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
      if (isGreaterThan) {
        let tmp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = tmp; 
        madeAnySwaps = true;
      } 
      i++;
      innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
    }); 
  } else {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
      if (madeAnySwaps) {
        innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
      } else {
        sortCompletionCallback(arr);
      }
    }
    outerBubbleSortLoop(true);
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});