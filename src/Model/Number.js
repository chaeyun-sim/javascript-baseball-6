import Validator from '../utils/Validator.js';

class Number {
  #number;
  constructor(input) {
    this.#validate(input);
    this.#number = input;
  }

  #validate(input) {
    Validator.checkNumber(input);
  }

  returnValue() {
    return this.#number;
  }
}

export default Number;
