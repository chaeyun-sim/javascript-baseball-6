import CompareNumbers from '../src/Model/CompareNumbers';

describe('CompareNumbers 클래스 테스트', () => {
  test.each([
    ['123', '234', 2, 0],
    ['123', '129', 0, 2],
    ['197', '169', 1, 1],
    ['123', '861', 1, 0],
    ['345', '398', 0, 1],
    ['147', '714', 3, 0],
  ])(
    '플레이어가 %s이고 컴퓨터가 %s일 때 ball은 %i개, strike는 %i개이다.',
    (user, computer, ball, strike) => {
      const result = new CompareNumbers().compareNumbers(user, computer);

      expect(result.strikes).toBe(strike);
      expect(result.balls).toBe(ball);
    }
  );

  test('플레이어의 숫자와 컴퓨터의 숫자가 일치하지 않을 때 balls는 0, strikes는 0이다.', () => {
    const user = '123';
    const computer = '456';
    const result = new CompareNumbers().compareNumbers(user, computer);

    expect(result.strikes).toBeFalsy();
    expect(result.balls).toBeFalsy();
  });

  test('플레이어의 숫자와 컴퓨터의 숫자가 일치할 때 strike는 3개이다.', () => {
    const user = '123';
    const computer = '123';
    const result = new CompareNumbers().compareNumbers(user, computer);

    expect(result.strikes).toBe(3);
    expect(result.balls).toBe(0);
  });
});
