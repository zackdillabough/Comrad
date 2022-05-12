import { CREATE_ROOM } from '../constants';

export const createRoom = roomInfo => ({
    type: CREATE_ROOM,
    payload: roomInfo,
});
