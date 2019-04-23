/*
State of Application
 */

import {LATLNG} from "../constants/actionTypes";

const INITIAL_STATE = {

  location: {lat: null, lng: null}
};

function appStateReducer(state=INITIAL_STATE, action) {
    switch (action.type) {

        case LATLNG:

            let newState = Object.assign({}, state);
            newState.location = action.location;

            return newState;

        default:
            return state;
    }
}

export default appStateReducer;