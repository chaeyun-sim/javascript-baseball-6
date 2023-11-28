import NumberGenerator from '../Model/NumberGenerator.js';
import OutputView from '../View/OutpuView.js';
import InputView from '../View/InputView.js';
import PlayerNumber from '../Model/PlayerNumber.js';
import HintGenerator from '../Model/HintGenerator.js';

class Controller {
  #computer;
  constructor() {
    this.#computer = 0;
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
    const input = await InputView.readNumber();
    return new PlayerNumber(input).returnValue();
  }

  async requestHint() {
    let isPlaying = true;

    while (isPlaying) {
      const user = await this.requestUserNumber();

      this.hint = new HintGenerator(user, this.#computer);

      if (!this.hint.returnValue()) {
        const hint = this.hint.getResult();
        OutputView.printHint(hint);
      } else {
        isPlaying = false;
      }
    }
  }
}

export default Controller;
