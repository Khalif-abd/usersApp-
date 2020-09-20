const inState = {
    loading: false,
    data: []
}


export function GetFavoriteMasters(state = inState, action) {
    switch (action.type) {
        case 'LOAD_FAVORITE_MASTER':
            return {
                ...state,
                loading: true
            }

        case 'GET_FAVORITE_MASTER':
            return {
                ...state,
                data: action.payload,
                loading: false
            }


        default:
            return state
    }
}

