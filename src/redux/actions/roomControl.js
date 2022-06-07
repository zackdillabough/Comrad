import { CREATE_ROOM, JOIN_ROOM, LEAVE_ROOM } from '../constants';

export const createRoom = roomInfo => ({
    type: CREATE_ROOM,
    payload: roomInfo,
});

export const joinRoom = roomInfo => ({
    type: JOIN_ROOM,
    payload: roomInfo,
});

export const leaveRoom = roomInfo => ({
    type: LEAVE_ROOM,
    payload: roomInfo,
});
