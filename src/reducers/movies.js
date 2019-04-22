import {ADD_MOVIE, REMOVE_MOVIE} from "../constants/actionTypes";

const INITIAL_STATE = {
    movies: [{id: 1}, {id: 2}]
};

/*
Reducer to handle add/remove from user's to watch movies
 */
function moviesReducer(state=INITIAL_STATE, action) {
    switch (action.type) {

        case ADD_MOVIE:

            console.log('moviesReducer ADD_MOVIE');

            let movie = state.movies.slice().filter((movie) => {
                return movie.id === action.movie.id;
            });

            if(movie.length > 0) {
                return state;
            }


            let movies = state.movies.slice();

            return {
                movies: [...movies, action.movie]
            };
        case REMOVE_MOVIE:

            return {
                movies: state.movies.slice().filter((movie) => {
                    return movie.id !== action.movie
                })
            };
        default:
            return state ;
    }
}

export default moviesReducer;