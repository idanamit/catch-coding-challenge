import {Action} from "redux";

const initialState = {
    metadata: {},
    results: []
};

function rootReducer(state = initialState, action: Action) {
    return state;
}

export default rootReducer;
