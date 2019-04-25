import * as types from "../constants/actionTypes";

function setGeolocation(location) {
    return {
        type: types.LATLNG,
        location
    }
}

export {
    setGeolocation
}