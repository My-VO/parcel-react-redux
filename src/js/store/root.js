import {combineReducers} from 'redux';

const initialState = {
    name: "E-brairie",
    init: false,
    loading: false
}

const initialStateReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'APP_INIT':
            return {
                ...state,
                loading: true
            }

        case 'APP_READY':
            return {
                ...state,
                init: true,
                loading: false
            }

        case 'APP_RESET':
            return state

        default:
            return state
    }
}
const rootReducer = combineReducers({app: initialStateReducer})

export default rootReducer
