export const initialState = {
  isLogin: false,
}; // 처음 state값으로 count 0을 주었다. state값은 객체, 배열로도 사용할 수 있다.

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


export const loginAction = () => ({ // 액션 생성 함수
    type : LOGIN
});
export const logoutAction = () => ({ // 액션 생성 함수
  type : LOGOUT
});

const reducer = (state=initialState, action) => { // 리듀서
    switch (action.type) { 
        case LOGIN:
          return state = {
            ...state,
            id: 1,
            username: "",
            email: "",
            password: "",
            isLogin: true
          }
        case LOGOUT:
          return state = {
            ...initialState,
          }          
        default:
          return state;
    }
};

export default reducer;