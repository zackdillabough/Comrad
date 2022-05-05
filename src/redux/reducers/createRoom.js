import { CREATE_ROOM } from '../constants';

const initialState = {
    roomName: ""
};

const createRoom = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ROOM:
            return {
                roomName: action.payload,
            };
        default:
            return state;
    }
};

export default createRoom;
