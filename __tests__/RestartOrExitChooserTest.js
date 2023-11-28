import RestartOrExitChooser from '../src/Model/RestartOrExitChooser';

describe('RestartOrExitChooser 클래스 테스트', () => {
  test.each(['1', '2'])(
    '1 또는 2를 입력했을 때 예외가 발생하지 않는다.',
    input => {
      expect(() => new RestartOrExitChooser(input)).not.toThrow('[ERROR]');
    }
  );

  test('입력 값이 없을 때 예외가 발생한다.', () => {
    expect(() => new RestartOrExitChooser('')).toThrow('[ERROR]');
  });

  test.each(['3', '****', 'asdf'])(
    '1과 2가 아니라면 예외가 발생한다.',
    input => {
      expect(() => new RestartOrExitChooser(input)).toThrow('[ERROR]');
    }
  );
});
