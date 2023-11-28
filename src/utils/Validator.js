import { ERROR_MESSAGE } from '../constants/constants.js';

const Validator = {
  checkGeneratedNumber(input) {
    if (!input) throw new Error(ERROR_MESSAGE.invalidInput);

    if (!/^[1-9]{3}$/.test(input)) throw new Error(ERROR_MESSAGE.invalidType);

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

  checkRestartNumber(input) {
    if (!input) throw new Error(ERROR_MESSAGE.invalidInput);

    if (!['1', '2'].includes(input))
      throw new Error(ERROR_MESSAGE.invalidRestart);
  },
};

export default Validator;
