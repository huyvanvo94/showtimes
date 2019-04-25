

import Config from 'react-native-config';
// Movie Glu Headers
const MOVIE_GLU_API = Config.MOVIE_API;

let defaultMovieGlueHeader = {
    'Content-Type': 'application/json;charset=UTF-8',

    "Access-Control-Allow-Origin": "*",
    "api-version": "v102",
    "Authorization": Config.AUTH,
    "client": Config.USERNAME,
    "x-api-key": Config.API_KEY
};

export {
    defaultMovieGlueHeader,
    MOVIE_GLU_API
}