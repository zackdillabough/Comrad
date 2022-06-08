import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createRoom } from '../redux/actions/roomControl';
import {View, StyleSheet, Pressable} from 'react-native';
import {Text, TextInput} from 'react-native-paper'
import NavButton from './../components/general/NavButton';
import firestore from '@react-native-firebase/firestore';
import { initRoom, addParticipant } from './../services/room'

const mapDispatchToProps = (dispatch) => ({
    createRoom: (roomName) => {
        dispatch(createRoom(roomName));
    },
});

const mapStateToProps = (state) => ({
    userInfo: state.userControl,
});

const ConnectedCreateRoom = ({navigation, createRoom, userInfo}) => {
    const [name, setName] = useState('');

    const handlePress = async () => {
        let participants = {};
        participants[userInfo.uid] = {
            displayName: userInfo.displayName,
            photoURL: userInfo.photoURL,
        }

        const roomCode = await initRoom(name, participants);
        createRoom({
            "roomName": name, 
            "roomCode": roomCode, 
            "participants": participants,
        });
        navigation.navigate("NewRoom");
    };

    return(
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.body}>
                    <Text style={styles.bodyText}>Room name</Text>
                    <TextInput onChangeText={(text) => setName(text)}/>
                    <NavButton title="Create room" onPress={() => handlePress()}/>
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
    mapStateToProps, 
    mapDispatchToProps
)(ConnectedCreateRoom);

export default CreateRoom;
