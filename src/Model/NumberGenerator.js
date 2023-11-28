import { MissionUtils } from '@woowacourse/mission-utils';

class NumberGenerator {
  #computer;
  constructor() {
    this.#computer = 0;
    this.#generate();
  }

  #generate() {
    const computer = [];

    while (computer.length < 3) {
      const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(RANDOM_NUMBER)) {
        computer.push(RANDOM_NUMBER);
      }
    }

    this.#computer = computer.map(String).join('');
  }

  /**
   * @returns {number}
   **/
  returnValue() {
    return this.#computer;
  }
}

export default NumberGenerator;
