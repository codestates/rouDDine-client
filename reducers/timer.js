export const initialState = {}; // 처음 state값으로 count 0을 주었다. state값은 객체, 배열로도 사용할 수 있다.

export const ROUTINE_START = 'ROUTINE_START'; // count 1을 증가시킬 액션 타입이다.

export const routineStart = () => ({ // 액션 생성 함수
    type : ROUTINE_START
});

const reducer = (state=initialState, action) => { // 리듀서
    switch (action.type) {  // 액션의 type이 COUNT_PLUS일땐 state에 + 1 COUNT_MINUS 일 땐 state에 -1
        case ROUTINE_START:
            return state = {
              ...state,
              ex1:{
                set: 3,
                ex_time: 120,
                rest_time: 60,
              },
              ex2:{
                set: 5,
                ex_time: 120,
                rest_time: 60,
              },
            };

        default:
            return state;
    }
};

export default reducer;