import NumberGenerator from '../Model/NumberGenerator';
import OutputView from '../View/OutpuView';
import InputView from '../View/InputView';

class Controller {
  #computer;
  constructor() {
    this.#computer = null;
    this.play();
  }

  async play() {
    this.requestGenerateNumber();
    await this.startGame();
  }

  requestGenerateNumber() {
    this.#computer = new NumberGenerator().returnValue();
  }

  async startGame() {
    OutputView.printGameStart();

    const INPUT = await InputView.readNumber();
    return INPUT;
  }
}

export default Controller;
