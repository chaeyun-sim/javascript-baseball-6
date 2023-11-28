import Validator from '../utils/Validator.js';

class RestartOrExitChooser {
  #number;
  constructor(input) {
    this.#validate(input);
    this.#number = input;
  }

  /**
   *
   * @param {string} input
   */
  #validate(input) {
    Validator.checkRestartNumber(input);
  }

  /**
   *
   * @returns {boolean}
   */
  returnRestart() {
    return this.#number === '1';
  }
}

export default RestartOrExitChooser;
