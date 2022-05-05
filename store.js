import { createStore, combineReducers } from 'redux';
import signIn from './src/redux/reducers/signIn';
import createRoom from './src/redux/reducers/createRoom';

const rootReducer = combineReducers({
    signIn: signIn,
    createRoom: createRoom,
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;
