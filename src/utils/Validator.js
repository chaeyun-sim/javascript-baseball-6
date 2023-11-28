import { ERROR_MESSAGE } from '../constants/constants.js';

const Validator = {
  checkNumber(input) {
    if (!input) throw new Error(ERROR_MESSAGE.invalidInput);

    if (input.length > 3) throw new Error(ERROR_MESSAGE.invalidLength);

    if (!/^\d{3}$/.test(input)) throw new Error(ERROR_MESSAGE.invalidType);

    if (!this.checkDuplicated(input)) throw new Error(ERROR_MESSAGE.duplicated);
  },

  checkDuplicated(input) {
    const result = [];

    for (let i = 0; i < 3; i++) {
      if (result.includes(input[i])) {
        return false;
      }
      result.push(input[i]);
    }

    return true;
  },
};

export default Validator;
