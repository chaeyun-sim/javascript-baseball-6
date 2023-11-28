import OutputView from '../View/OutpuView.js';
import { HINT, WINNINGS } from '../constants/constants.js';

class HintGenerator {
  constructor(userInput, computerNumber) {
    this.hasWon = false;
    this.#checkGameStatus(userInput, computerNumber);
  }

  /**
   *
   * @param {string} userInput
   * @param {string} computerNumber
   * @returns {boolean}
   */
  #checkGameStatus(userInput, computerNumber) {
    const { strikes, balls } = this.#calulateHint(userInput, computerNumber);

    if (strikes === WINNINGS) {
      this.hasWon = true;
      OutputView.print(HINT.victory);
      OutputView.printGameEnd();
    } else {
      this.hasWon = false;
      this.#getResult(strikes, balls);
    }
  }

  /**
   *
   * @param {string} userInput
   * @param {string} computerNumber
   * @returns {string, string}
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

    return { strikes, balls };
  }

  #getResult(strikes, balls) {
    let ballText = !balls ? '' : `${balls + HINT.ball} `;
    let strikeText = !strikes ? '' : strikes + HINT.strike;

    OutputView.printHint(
      !ballText && !strikeText ? HINT.nothing : ballText + strikeText
    );
  }

  returnValue() {
    return this.hasWon;
  }
}

export default HintGenerator;
