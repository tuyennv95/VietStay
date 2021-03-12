import { combineReducers} from 'redux';

import loginReducer from './login';
import searchReducer from './search';
import bookReducer from './booking';
import timkiemnangcao from './timkiemnangcao';
import loveReducer from './love';

export default combineReducers({
    login: loginReducer,
    search: searchReducer,
    booking: bookReducer,
    searchAdv: timkiemnangcao,
    love: loveReducer,
});