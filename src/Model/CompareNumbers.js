import { WINNINGS } from '../constants/constants.js';

class CompareNumbers {
  #strikes;
  #balls;
  constructor(userInput, computerNumber) {
    this.compareNumbers(userInput, computerNumber);
  }

  /**
   *
   * @param {string} userInput
   * @param {string} computerNumber
   */
  compareNumbers(userInput, computerNumber) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < WINNINGS; i++) {
      if (userInput[i] === computerNumber[i]) {
        strikes++;
      } else if (computerNumber.includes(userInput[i])) {
        balls++;
      }
    }

    this.#strikes = strikes;
    this.#balls = balls;
  }

  /**
   *
   * @returns [number, number]
   */
  returnValue() {
    return [this.#strikes, this.#balls];
  }
}

export default CompareNumbers;
