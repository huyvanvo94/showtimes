import { combineReducers } from 'redux';
import moviesReducer from './movies';
import filmsReducer from './films';

import appStateReducer from "./app.state";

const reducer = combineReducers({
    moviesReducer: moviesReducer,
    filmsReducer: filmsReducer,
    appStateReducer: appStateReducer

});

export default reducer;