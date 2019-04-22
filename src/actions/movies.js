import * as types from "../constants/actionTypes";

function addMovie(movie) {
    return {
        type: types.ADD_MOVIE,
        movie
    };
}

function removeMovie(movie) {
    return {
        type: types.REMOVE_MOVIE,
        movie
    };
}

export {
    addMovie,
    removeMovie
}