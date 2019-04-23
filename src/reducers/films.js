// Reducer to handle REST call from server

import {ADD_FILM_FROM_SERVER} from "../constants/actionTypes";

const INITIAL_STATE = {

    films: []

};

function filmsReducer(state=INITIAL_STATE, action) {
    switch (action.type) {

        case ADD_FILM_FROM_SERVER:

            let films = state.films.slice();

            films = [...films, action.film];

            return {
                films: films
            };

        default:
            return state;
    }
}

export default filmsReducer;