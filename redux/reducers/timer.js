export const ROUTINE_START = 'ROUTINE_START';
export const TIMER_START = 'TIMER_START';

const initialState = { hours: 0, minutes: 1, seconds: 10, isRunning: false };
export default function reducer(state = initialState, action) {
  // 리듀서
  switch (action.type) {
    case ROUTINE_START:
      return { ...state, ...action.payload };
    case TIMER_START:
      return { ...state, isRunning: !state.isRunning };
    default:
      return state;
  }
}

export const routineStart = (seconds, minutes, hours) => ({
  // 액션 생성 함수
  type: ROUTINE_START,
  payload: {
    hours,
    minutes,
    seconds,
  },
});

export const timerStart = () => ({
  type: TIMER_START,
});
