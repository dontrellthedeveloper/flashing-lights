import CLOTHING_DATA from "./clothing.data";

const INITIAL_STATE = {
    collections: CLOTHING_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default shopReducer;