

import Config from 'react-native-config';
// Movie Glu Headers
const MOVIE_GLU_API = Config.MOVIE_API;

let defaultMovieGlueHeader = {
    'Content-Type': 'application/json;charset=UTF-8',

    "Access-Control-Allow-Origin": "*",
    "api-version": "v102",
    "Authorization": "Basic UEZJRTpwWjdVd0RYTGw1RTk=",
    "client": "PFIE",
    "x-api-key": "pp8n2yDVETaYbcHhJOvCW1GwYaIdHO5P6IuQFbAP"
};

export {
    defaultMovieGlueHeader,
    MOVIE_GLU_API
}