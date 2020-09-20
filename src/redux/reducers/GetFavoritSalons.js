const inState = {
    loading: true,
    data: []
}

export function GetFavoriteSalons(state = inState, action) {
    switch (action.type) {
        case 'lOAD_FAVORITE_SALON':
            return {
                ...state,
                loading: true
            }

        case 'GET_FAVORITE_SALON':
            return {
                ...state,
                data: action.payload,
                loading: false
            }

        default:
            return state
    }
}

