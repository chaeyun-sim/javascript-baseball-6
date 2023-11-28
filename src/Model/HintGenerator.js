import OutputView from '../View/OutpuView.js';
import { HINT, WINNINGS } from '../constants/constants.js';

class HintGenerator {
  #strikes;
  #balls;
  constructor(strikes, balls) {
    this.hasWon = false;
    this.#strikes = strikes;
    this.#balls = balls;
    this.#checkGameStatus(strikes, balls);
  }

  #checkGameStatus(strikes, balls) {
    if (strikes === WINNINGS) {
      this.hasWon = true;
      OutputView.print(HINT.victory);
      OutputView.printGameEnd();
    } else {
      this.hasWon = false;
    }
  }
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
