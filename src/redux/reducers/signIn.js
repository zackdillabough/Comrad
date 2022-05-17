import { SIGN_IN, SIGN_OUT } from '../constants';

const initialState = {
    isLoggedIn: false,
    userName: {},
};

const signIn = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                isLoggedIn: true,
                userName: action.payload,
            };
        case SIGN_OUT:
            return {
                isLoggedIn: false,
                userName: {},
            }
        default:
            return state;
    }
};

export default signIn;
