import * as types from '../constants/ActionTypes';

let initialState = {
    list      : {},
    listOut   : {},
    listKeysLength: 0,
    listOutKeysLength: 0,
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
            let data = {};
            for (var item of action.data) {
                data[item.isbn] = item.name;
            }
            return {
                ...state,
                isPending : false,
                list      : data
            };
        case types.MOVE_TO_POOL:
            const {pos, id} = action;
            let { list, listOut } = state;
            if (pos === 'left') {
                listOut[id] = list[id];
                delete list[id];
            } else {
                list[id] = listOut[id];
                delete listOut[id];
            }
            return {
                ...state,
                list,
                listKeysLength: Object.keys(list).length,
                listOut,
                listOutKeysLength: Object.keys(listOut).length,
            };
        default:
            return state;
    };
};

export default list;
