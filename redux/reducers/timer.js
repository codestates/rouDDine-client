export const ROUTINE_START = 'ROUTINE_START';
export const TIMER_START = 'TIMER_START';
export const TIMER_TIME = 'TIMER_TIME';

const initialState = {
  seconds: 10,
  minutes: 1,
  hours: 0,
  time: { seconds: 0, minutes: 0, hours: 0 },
  isRunning: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ROUTINE_START:
      return { ...state, ...action.payload };
    case TIMER_START:
      return { ...state, isRunning: !state.isRunning };
    case TIMER_TIME:
      return { ...state, time: action.payload.time };
    default:
      return state;
  }
}

export const routineStart = (seconds, minutes, hours) => ({
  type: ROUTINE_START,
  payload: {
    seconds,
    minutes,
    hours,
  },
});

export const timerStart = () => ({
  type: TIMER_START,
});

export const timerTime = (seconds, minutes, hours) => ({
  type: TIMER_TIME,
  payload: {
    time: {
      seconds,
      minutes,
      hours,
    },
  },
});
