import {ADD_MOVIE, REMOVE_MOVIE} from "../constants/actionTypes";


const INITIAL_STATE = {
    movies: []
};

/*
Reducer to handle add/remove from user's to watch movies
 */
function moviesReducer(state=INITIAL_STATE, action) {
    switch (action.type) {

        case ADD_MOVIE:

            console.log('moviesReducer ADD_MOVIE ' + action.movie.film_id);

            if(state.movies.length === 0) {
                return {
                    movies: [action.movie]
                }
            }

            // Check if already contains movie
            let movie = state.movies.slice().filter((movie) => {
                return movie.film_id === action.movie.film_id;
            });

            // If contains, exit from function
            if(movie.length > 0) {
                return state;
            }


            let movies = state.movies.slice();

            return {
                movies: [...movies, action.movie]
            };
        case REMOVE_MOVIE:

            console.log('moviesReducer REMOVE_MOVIE');

            return {
                movies: state.movies.slice().filter((movie) => {
                    return movie.film_id !== action.movie.film_id
                })
            };
        default:
            return state ;
    }
}

export default moviesReducer;