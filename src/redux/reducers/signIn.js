import { SIGN_IN, SIGN_OUT } from '../constants';

const initialState = {
    isLoggedIn: false,
    displayName: "",
    email: "",
    uid: "",
    photoURL: "",
};

const signIn = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                isLoggedIn: true,
                displayName: action.payload.displayName,
                email: action.payload.email,
                uid: action.payload.uid,
                photoURL: action.payload.photoURL,
            };
        case SIGN_OUT:
            return {
                initialState
            }
        default:
            return state;
    }
};

export default signIn;
