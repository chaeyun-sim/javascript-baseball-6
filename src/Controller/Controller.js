import NumberGenerator from '../Model/NumberGenerator.js';
import OutputView from '../View/OutpuView.js';
import InputView from '../View/InputView.js';
import Number from '../Model/Number.js';

class Controller {
  #computer;
  #user;
  constructor() {
    this.#computer = null;
    this.#user = null;
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
    this.#user = new Number(INPUT).returnValue();
  }
}

export default Controller;
