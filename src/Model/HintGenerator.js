import OutputView from '../View/OutpuView.js';
import { HINT, WINNINGS } from '../constants/constants.js';

class HintGenerator {
  #balls;
  #strikes;
  constructor(userInput, computerNumber) {
    this.hasWon = false;
    this.#checkGameStatus(userInput, computerNumber);
  }

  /**
   *
   * @param {string} userInput
   * @param {string} computerNumber
   */
  #checkGameStatus(userInput, computerNumber) {
    this.#calulateHint(userInput, computerNumber);

    if (this.#strikes === WINNINGS) {
      this.hasWon = true;
      OutputView.print(HINT.victory);
      OutputView.printGameEnd();
    } else {
      this.hasWon = false;
    }
  }

  /**
   *
   * @param {string} userInput
   * @param {string} computerNumber
   * @returns {{strikes: number, balls: number}}
   */
  #calulateHint(userInput, computerNumber) {
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
   * @param {number} strikes
   * @param {number} balls
   */
  getResult() {
    const balls = this.#balls;
    const strikes = this.#strikes;

    let ballText = !balls ? '' : `${balls + HINT.ball} `;
    let strikeText = !strikes ? '' : strikes + HINT.strike;

    return !ballText && !strikeText ? HINT.nothing : ballText + strikeText;
  }

  /**
   *
   * @returns {boolean}
   */
  returnValue() {
    return this.hasWon;
  }
}

export default HintGenerator;
