import PlayerNumber from '../src/Model/PlayerNumber';

describe('NumberGenerator 클래스 테스트', () => {
  test('입력값이 없을 때 에러가 발생한다.', async () => {
    const input = '';

    expect(() => new PlayerNumber(input)).toThrow('[ERROR]');
  });

  test('입력값에 숫자 외의 문자가 포함되면 에러가 발생한다.', async () => {
    const input = '1a*';

    expect(() => new PlayerNumber(input)).toThrow('[ERROR]');
  });

  test('입력값의 길이가 3이 아니라면 에러가 발생한다.', async () => {
    const input = '1234';

    expect(() => new PlayerNumber(input)).toThrow('[ERROR]');
  });

  test.each(['122', '222'])(
    '입력값에 중복된 숫자가 있을 경우 에러가 발생한다.',
    async input => {
      expect(() => new PlayerNumber(input)).toThrow('[ERROR]');
    }
  );
});
