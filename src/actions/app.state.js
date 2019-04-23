import * as types from "../constants/actionTypes";

function setGeolocation({lat, lng}) {
    return {
        type: types.LATLNG,
        location: {lat: lat, lng: lng}
    }
}

export {
    setGeolocation
}