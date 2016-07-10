import * as types from 'constants/ActionTypes';

const list = (lastState, action) => {
    switch (action.type) {
        case types.FETCH_SUCCESSED:
            /*
            * can do more thing, and handle Json data format
            */
            const data = action.data;
            return {
                type: action.type,
                data
            };
        default:
            return action;
    };
};

export default list;