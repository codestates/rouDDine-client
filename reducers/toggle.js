export const initialState = false; // 처음 state값으로 count 0을 주었다. state값은 객체, 배열로도 사용할 수 있다.

export const TOGGLE = 'TOGGLE'; // count 1을 증가시킬 액션 타입이다.

export const toggleModal = () => ({ // 액션 생성 함수
    type : TOGGLE
});

const reducer = (state=initialState, action) => { // 리듀서
    switch (action.type) { 
        case TOGGLE:
            return !state
        default:
            return state;
    }
};

export default reducer;