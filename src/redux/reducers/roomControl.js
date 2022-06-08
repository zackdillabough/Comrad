import { CREATE_ROOM, JOIN_ROOM, LEAVE_ROOM } from '../constants';
import firestore from '@react-native-firebase/firestore';

const initialState = {
    roomName: "",
    roomCode: "",
    participants: {},
};

const roomControl = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ROOM:
            return {
                roomName: action.payload.roomName,
                roomCode: action.payload.roomCode,
                participants: action.payload.participants,
            };
        case JOIN_ROOM:
            return {
                roomName: action.payload.roomName,
                roomCode: action.payload.roomCode,
                participants: action.payload.participants,
            };
        case LEAVE_ROOM:
            return {
                roomName: "",
                roomCode: "",
                participants: {},
            };
        default:
            return state;
    }
};

export default roomControl;
