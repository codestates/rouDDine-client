export const TOGGLE = 'TOGGLE';

const initialState = false; // 처음 state값으로 count 0을 주었다. state값은 객체, 배열로도 사용할 수 있다.

export default function reducer(state = initialState, action) {
  // 리듀서
  switch (action.type) {
    case TOGGLE:
      return !state;
    default:
      return state;
  }
}

export const toggleModal = () => ({
  // 액션 생성 함수
  type: TOGGLE,
});
