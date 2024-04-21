//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(myScores) {
    this.myScores = myScores;
  }
  //list of scores
  get scores() {
    return this.myScores;
  }
  //last score (length)
  get latest() {
    return this.myScores[this.myScores.length - 1];
  }
  //highest
  get personalBest() {
    return Math.max(...this.myScores);
  }
  //top three higher to lower
  get personalTopThree() {
    return this.myScores.sort((a, b) => b - a).slice(0, 3);
  }
}
