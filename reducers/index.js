import { combineReducers } from 'redux'; // 여러 리듀서들을 하나로 합쳐준다.
import count from './count';
import toggle from './toggle'
import login from './login'
import routine_id from './routine_id'

const rootReducer = combineReducers({
    count, // 여기에 다른 리듀서들을 더 적으면 된다!
    toggle,
    login,
    routine_id,
});

export default rootReducer; // _app.js에서 reducer로 사용된다!