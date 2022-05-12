import { CREATE_ROOM } from '../constants';

const initialState = {
    roomName: "",
    roomCode: "",
};

const createRoom = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ROOM:
            return {
                roomName: action.payload.roomName,
                roomCode: action.payload.roomCode,
            };
        default:
            return state;
    }
};

export default createRoom;
