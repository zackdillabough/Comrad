import { createStore, combineReducers } from 'redux';
import signIn from './src/redux/reducers/signIn';

const rootReducer = combineReducers({
    signIn: signIn,
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;
