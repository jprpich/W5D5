
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {    
    this.towers = [[3,2,1], [],[]];
    
    // const clock = new Date();
    // this.hours = clock.getHours();
    // this.minutes = clock.getMinutes();
    // this.seconds = clock.getSeconds();
    // this.printTime();
    // setInterval(this._tick.bind(this), 1000);
  }
  
  run() {
  
    // until stack two or three is full 
    // get a move from the player 
    // check for valid move 
    // move a disk to a stack 
    this.promptMove(this.move.bind(this));

  }


  promptMove(cb) {
    this.print();
    reader.question('from?', function (startTowerIdx) {
      console.log(this.towers[0]);
      reader.question('to?', function (endTowerIdx) {
        console.log(this.towers[0]);
        if (cb(startTowerIdx, endTowerIdx)) {
          console.log(this.towers[0]);
          if (!this.isWon.bind(this)) {
            this.run();
          } else {
            console.log('You won!');
            readline.close();
            // completionCallback();
          } 
        } else {
          console.log('invalid move');
          this.run();
        }
      });     
    });
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    // if this.towers[startTowerIdx] is empty, return false
    // if this.towers[startTowerIdx][-1] > this.towers[endTowerIdx][-1], return false
    // return true
    if (this.towers[startTowerIdx].length === 0) {
      return false;
    } else if (this.towers[startTowerIdx][this.towers[startTowerIdx].length-1] > 
      this.towers[endTowerIdx][this.towers[endTowerIdx].length-1]) {
        return false;
    } else {
      return true;
    }
  }

  move(startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop);
      return true;
    }
    return false; 
  }

  print() {
    console.log(JSON.stringify(this.towers));
  }

  isWon() {
    if (this.towers[1].length === 3 || this.towers[2].length === 3) {
      return true;
    }
    return false;
  }

  // _tick() {
  //   // 1. Increment the time by one second.
  //   // 2. Call printTime.
  //   this.seconds++;
  //   this.printTime();
  // }
}

let game = new Game;
// game.promptMove();
// console.log(game.move(1,2));
// game.print();
game.run();