import { SIGN_IN } from '../constants';

export const signIn = user => ({
    type: SIGN_IN,
    payload: user,
});
