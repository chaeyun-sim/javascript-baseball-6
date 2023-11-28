import { MissionUtils } from '@woowacourse/mission-utils';
import { GUIDE_TEXT } from '../constants/constants.js';

const InputView = {
  async readNumber() {
    const input = await MissionUtils.Console.readLineAsync(
      GUIDE_TEXT.inputNumber
    );
    return input;
  },

  async readRestart() {
    const input = await MissionUtils.Console.readLineAsync(GUIDE_TEXT.restart);
    return input;
  },
};

export default InputView;
