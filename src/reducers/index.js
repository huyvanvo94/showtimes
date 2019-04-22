import { combineReducers } from 'redux';
import moviesReducer from './movies';
const reducer = combineReducers({
    moviesReducer: moviesReducer
});

export default reducer;