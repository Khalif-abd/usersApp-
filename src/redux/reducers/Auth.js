const inState = {
    access: false
}


export default function Auth(state = inState, action) {
    switch (action.type) {
        case 'AUTH':
            return {
                ...state,
                access: true
            }

        case 'EXIT':
            return {
                ...state,
                access: false
            }

        default:
            return state
    }
}

