import Validator from '../utils/Validator.js';

class PlayerNumber {
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
    Validator.checkNumber(input);
  }

  /**
   *
   * @returns {string}
   */
  returnValue() {
    return this.#number;
  }
}

export default PlayerNumber;
