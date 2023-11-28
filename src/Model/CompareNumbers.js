import { WINNINGS } from '../constants/constants.js';

class CompareNumbers {
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

    return { strikes, balls };
  }
}

export default CompareNumbers;
