import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createRoom } from '../redux/actions/createRoom';
import {View, StyleSheet, Pressable} from 'react-native';
import {Text, TextInput} from 'react-native-paper'
import NavButton from './../components/general/NavButton';
import firestore from '@react-native-firebase/firestore';

const mapDispatchToProps = (dispatch) => ({
    createRoom: (roomName) => {
        dispatch(createRoom(roomName));
    },
});

// returns a 5-character alphabetical room code
const createRoomCode = () => {
    let code = "";
    for (let i = 0; i < 5; i++) {
        randomChar = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        code = code + randomChar;
    }
    return code;
};

// returns an open room code
const getRoomCode = async () => {
    let roomCode = createRoomCode();
    let docExists = true;

    while (docExists) {
        var docRef = firestore().collection("rooms").doc(roomCode);
        await docRef.get().then((doc) => {
            if (doc.exists) {
                roomCode = createRoomCode();
            } else {
                docExists = false;
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }

    return roomCode
};

// initializes a room with provided room name and randomly generated room code
const initRoom = async (navigation, roomName, createRoom) => {
    roomCode = await getRoomCode();
    
    firestore()
        .collection('rooms')
        .doc(roomCode)
        .set({
            name: 'Jeffray Kalidi',
        })
        .then(() => {
            console.log('room added!');
        })
        .catch(() => {
            console.log('fail');
        });

    createRoom({roomName, roomCode});
    navigation.navigate("NewRoom");
};

const ConnectedCreateRoom = ({navigation, createRoom}) => {
    const [name, setName] = useState('');
    return(
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.body}>
                    <Text style={styles.bodyText}>Room name</Text>
                    <TextInput onChangeText={(text) => setName(text)}/>
                    <NavButton title="Create room" onPress={() => initRoom(navigation, name, createRoom)}/>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Text style={styles.subTitle}>Back</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 40,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
    },
    subTitle: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
    },
    body: {
        marginTop: 130,
        justifyContent: 'center',
    },
    bodyText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        padding: 25,
    }

});

const CreateRoom = connect(
    null, 
    mapDispatchToProps
)(ConnectedCreateRoom);

export default CreateRoom;
