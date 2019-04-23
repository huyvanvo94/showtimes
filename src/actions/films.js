import * as types from "../constants/actionTypes";

function addFilm(film) {
    return {
        type: types.ADD_FILM_FROM_SERVER,
        film
    }
}

export {
    addFilm
}