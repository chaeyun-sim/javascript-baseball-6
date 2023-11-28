import NumberGenerator from '../Model/NumberGenerator.js';
import OutputView from '../View/OutpuView.js';
import InputView from '../View/InputView.js';
import PlayerNumber from '../Model/PlayerNumber.js';
import HintGenerator from '../Model/HintGenerator.js';
import RestartOrExitChooser from '../Model/RestartOrExitChooser.js';
import CompareNumbers from '../Model/CompareNumbers.js';

class Controller {
  #computer;
  constructor() {
    this.#computer = 0;
  }

  async play() {
    this.requestStartGame();
    await this.requestPlayGame();
  }

  requestStartGame() {
    OutputView.printGameStart();
  }

  async requestPlayGame() {
    this.requestGenerateNumber();
    await this.requestHint();
    await this.requestEndGameOrRestart();
  }

  requestGenerateNumber() {
    this.#computer = new NumberGenerator().returnValue();
  }

  async requestUserNumber() {
    const input = await InputView.readNumber();
    return new PlayerNumber(input).returnValue();
  }

  async requestHint() {
    let isPlaying = true;

    while (isPlaying) {
      const user = await this.requestUserNumber();
      const { strikes, balls } = new CompareNumbers().compareNumbers(
        user,
        this.#computer
      );
      this.hint = new HintGenerator(strikes, balls);

      if (!this.hint.returnValue()) {
        const hint = this.hint.getResult();
        OutputView.printHint(hint);
      } else {
        isPlaying = false;
      }
    }
  }

  async requestEndGameOrRestart() {
    const input = await InputView.readRestart();
    const restart = new RestartOrExitChooser(input).returnRestart();

    if (restart) {
      await this.requestPlayGame();
    }
  }
}

export default Controller;
