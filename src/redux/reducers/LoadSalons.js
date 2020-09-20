const inState = {
    loading: 12355666,
    data: []
}


export function LoadSalons(state = inState, action) {
    switch (action.type) {
        case 'lOAD_SALONS':
            return {
                ...state,
                loading: true
            }

        case 'GET_lOAD_SALONS':
            return {
                ...state,
                data: action.payload,
                loading: false
            }

        default:
            return state
    }
}

