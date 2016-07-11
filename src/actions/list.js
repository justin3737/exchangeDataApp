import * as types from 'constants/ActionTypes';

const BRIDGE_KEY = 'list';

let fetchSuccessed = (data) => {
    return {
        type     : types.FETCH_SUCCESSED,
        birdgeKey: BRIDGE_KEY,
        data
    };
};

let fetchFailed = () => {
    return {
        type     : types.FETCH_FAILED,
        birdgeKey: BRIDGE_KEY,
    };
};

let fetchPending = () => {
    return {
        type     : types.FEATCH_PENDING,
        isPending: true
    };
};

export function getAPI() {
    return {
        types    : [fetchSuccessed, fetchFailed, fetchPending],
        fetchAPI : {
            path  : 'http://localhost:3000/list',
            method: 'GET'
        }
    };
}

/* List: 移動到另一個 array pool */
export const movePool = (pos, id) => {
    return {
        type: types.MOVE_TO_POOL,
        pos,
        id
    }
}
