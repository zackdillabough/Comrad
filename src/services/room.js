import firestore from '@react-native-firebase/firestore';

// returns a 5-character alphabetical room code
const getRandomRoomCode = () => {
    let code = "";
    for (let i = 0; i < 5; i++) {
        randomChar = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        code = code + randomChar;
    }

    return code;
};

// returns an open room code
const getUniqueRoomCode = async () => {
    let roomCode = getRandomRoomCode();
    let docExists = true;

    while (docExists) {
        await getRoomInfo(roomCode).then((doc) => {
            if (Object.keys(doc).length !== 0) {
                roomCode = getRandomRoomCode();
            } else
                docExists = false;
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }

    return roomCode
};

// returns document containing room info if a room exists
// otherwise returns an empty object
export const getRoomInfo = async (roomCode) => {
    let data = {};
    roomRef = firestore().collection('rooms').doc(roomCode);
    await roomRef.get().then((doc) => {
        if (doc.exists) {
            data = doc.data();
        } else {
            console.log("room does not exist");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    })

    return data;
};

// initializes a room with provided room name and randomly generated room code
// returns room code
export const initRoom = async (roomName) => {
    roomCode = await getUniqueRoomCode();
    firestore()
        .collection('rooms')
        .doc(roomCode)
        .set({
            name: roomName,
            participants: [],
        })
        .then(() => {
            console.log('room added!');
        })
        .catch(() => {
            console.log('fail');
        });
    return roomCode;
};


