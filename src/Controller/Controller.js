import NumberGenerator from '../Model/NumberGenerator.js';
import OutputView from '../View/OutpuView.js';
import InputView from '../View/InputView.js';
import Number from '../Model/Number.js';
import HintGenerator from '../Model/HintGenerator.js';
import { GUIDE_TEXT } from '../constants/constants.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class Controller {
  #computer;
  #user;
  constructor() {
    this.#computer = 0;
    this.#user = 0;
  }

  async play() {
    this.requestGenerateNumber();
    this.requestStartGame();
    await this.requestHint();
  }

  requestGenerateNumber() {
    this.#computer = new NumberGenerator().returnValue();
  }

  requestStartGame() {
    OutputView.printGameStart();
  }

  async requestUserNumber() {
    const INPUT = await MissionUtils.Console.readLineAsync(
      GUIDE_TEXT.inputNumber
    );
    return new Number(INPUT).returnValue();
  }

  async requestHint() {
    let isPlaying = true;

    while (isPlaying) {
      const user = await this.requestUserNumber();

      this.hint = new HintGenerator(user, this.#computer);
      if (this.hint.returnValue()) {
        isPlaying = false;
      }
    }
  }
}

export default Controller;
