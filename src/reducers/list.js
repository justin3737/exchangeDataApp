import * as types from '../constants/ActionTypes';

let initialState = {
    list      : [],
    isPending : false
};

const list = (state = initialState, action) => {
    switch (action.type) {
        case types.FEATCH_PENDING:
            return {
                ...state,
                isPending: action.isPending
            };
        case types.FETCH_SUCCESSED:
            return {
                ...state,
                isPending : false,
                list      : action.data
            };
        default:
            return state;
    };
};

export default list;
