import { MissionUtils } from '@woowacourse/mission-utils';
import { GUIDE_TEXT } from '../constants/constants.js';

const OutputView = {
  print(text) {
    MissionUtils.Console.print(text);
  },

  printGameStart() {
    MissionUtils.Console.print(GUIDE_TEXT.start);
  },

  printHint(text) {
    MissionUtils.Console.print(text);
  },

  printGameEnd() {
    MissionUtils.Console.print(GUIDE_TEXT.victory);
  },
};

export default OutputView;
