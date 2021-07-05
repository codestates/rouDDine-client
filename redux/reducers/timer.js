export const ROUTINE_START = 'ROUTINE_START';

const initialState = {};
export default function reducer(state = initialState, action) {
  // 리듀서
  switch (action.type) {
    case ROUTINE_START:
      return { ...state /*, ...action.payload */ };
    default:
      return state;
  }
}

export const routineStart = () => ({
  // 액션 생성 함수
  type: ROUTINE_START,
});
