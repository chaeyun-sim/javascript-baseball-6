import NumberGenerator from '../Model/NumberGenerator';

class Controller {
  #computer;
  constructor() {
    this.#computer = null;
  }

  startGame() {
    this.#computer = new NumberGenerator().returnValue();
  }
}

export default Controller;
