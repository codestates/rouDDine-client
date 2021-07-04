export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const initialState = {
  isLogin: false,
};
export default function reducer(state = initialState, action) {
  // 리듀서
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLogin: false,
      };
    default:
      return state;
  }
}

export const loginAction = () => ({
  // 액션 생성 함수
  type: LOGIN,
});
export const logoutAction = () => ({
  // 액션 생성 함수
  type: LOGOUT,
});
