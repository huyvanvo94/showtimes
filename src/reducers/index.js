import { combineReducers } from 'redux';
import moviesReducer from './movies';
import filmsReducer from './films';

const reducer = combineReducers({
    moviesReducer: moviesReducer,
    filmsReducer: filmsReducer
});

export default reducer;