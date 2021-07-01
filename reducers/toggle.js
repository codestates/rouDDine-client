export const initialState = false; // 처음 state값으로 count 0을 주었다. state값은 객체, 배열로도 사용할 수 있다.

export const TOGGLE_TRUE = 'TOGGLE_TRUE'; // count 1을 증가시킬 액션 타입이다.
export const TOGGLE_FALSE = 'TOGGLE_FALSE'; // count 1을 감소시킬 액션 타입이다.

export const toggleTrue = () => ({ // 액션 생성 함수
    type : TOGGLE_TRUE
});

export const toggleFalse = () => ({
    type : TOGGLE_FALSE
})

const reducer = (state=initialState, action) => { // 리듀서
    switch (action.type) {  // 액션의 type이 COUNT_PLUS일땐 state에 + 1 TOGGLE_FALSE 일 땐 state에 -1
        case TOGGLE_TRUE:
            return state = true;
        case TOGGLE_FALSE:
            return state = false;
        default:
            return state;
    }
};

export default reducer;