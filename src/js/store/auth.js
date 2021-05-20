const initialState = {
    values: null,
    loading: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_FETCH':
            return {
                ...state,
                loading: true
            }

        case 'USER_SET':
            return {
                ...state,
                values: action.payload,
                loading: false
            }

        case 'USER_RESET':
            return initialState

        default:
            return state
    }
}

export default authReducer;
