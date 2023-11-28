const RESTART = 1;
const GAME_OVER = 2;
const WINNINGS = 3;

const GUIDE_TEXT = Object.freeze({
  start: '숫자 야구 게임을 시작합니다.',
  inputNumber: '숫자를 입력해주세요 : ',
  victory: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  restart: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
});

const ERROR_MESSAGE = Object.freeze({
  invalidInput:
    '[ERROR] 잘못된 입력입니다. 빈 문자열은 입력할 수 없습니다. 게임을 종료합니다.',
  invalidType:
    '[ERROR] 잘못된 형식입니다. 숫자 외의 문자는 입력할 수 없습니다. 게임을 종료합니다.',
  invalidLength:
    '[ERROR] 잘못된 형식입니다. 세자리 이상의 숫자는 입력할 수 없습니다. 게임을 종료합니다.',
  duplicated: '[ERROR] 중복된 숫자가 존재합니다. 게임을 종료합니다.',
  invalidRestart:
    '[ERROR] 잘못된 입력입니다. 1과 2 외의 문자는 입력할 수 없습니다. 게임을 종료합니다.',
});

const HINT = Object.freeze({
  strike: '스트라이크',
  ball: '볼',
  nothing: '낫싱',
  victory: '3스트라이크',
});

export { RESTART, GAME_OVER, WINNINGS, GUIDE_TEXT, ERROR_MESSAGE, HINT };
