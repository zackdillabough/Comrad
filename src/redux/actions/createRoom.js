import { CREATE_ROOM } from '../constants';

export const createRoom = roomName => ({
    type: CREATE_ROOM,
    payload: roomName,
});
