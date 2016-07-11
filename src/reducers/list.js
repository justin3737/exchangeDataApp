import * as types from '../constants/ActionTypes';

let initialState = {
    list      : [],
    listOut   : [],
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
        case types.MOVE_TO_POOL:
            const {pos, id} = action;
            let {list, listOut} = state;
            if (pos === 'left') {
                listOut.push(list.splice(id,1));
            } else {
                list.push(listOut.splice(id,1));
            }
            return {
                ...state,
                list,
                listOut
            };
        default:
            return state;
    };
};

export default list;
