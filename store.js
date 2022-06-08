import { createStore, combineReducers } from 'redux';
import userControl from './src/redux/reducers/userControl';
import roomControl from './src/redux/reducers/roomControl';

const rootReducer = combineReducers({
    userControl: userControl,
    roomControl: roomControl,
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;
