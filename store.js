import { createStore, combineReducers } from 'redux';
import signIn from './src/redux/reducers/signIn';
import roomControl from './src/redux/reducers/roomControl';

const rootReducer = combineReducers({
    signIn: signIn,
    roomControl: roomControl,
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;
