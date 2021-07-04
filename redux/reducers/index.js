import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import count from './count';
import toggle from './toggle';
import login from './login';
//리듀서들을 import

const rootReducer = combineReducers({
  //next의 redux와 client의 redux를 합치기
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  //여러 리듀서를 하나로 합쳐줌
  count,
  toggle,
  login,
});

export default rootReducer;