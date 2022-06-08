import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Pressable } from 'react-native';
import { Text, TextInput } from 'react-native-paper'
import NavButton from './../components/general/NavButton';
import CheckStoreContents from './../components/debug/CheckStoreContents';
import { joinRoom } from '../redux/actions/roomControl';
import { signOut } from '../redux/actions/userControl';
import { getRoomInfo, addParticipant } from './../services/room';
import { signOutWithGoogle } from './../services/auth';

const mapStateToProps = (state) => ({
    userInfo: state.userControl,
});

const mapDispatchToProps = (dispatch) => ({
    joinRoom: (roomInfo) => {
        dispatch(joinRoom(roomInfo));
    },
    signOut: () => {
        dispatch(signOut());
    },
})

const ConnectedWelcome = ({navigation, userInfo, signOut, joinRoom}) => {
    let [roomCode, setRoomCode] = useState('');
    let firstName = userInfo.displayName.split(" ")[0]

    const handleSubmit = async () => {
        let doc = await getRoomInfo(roomCode);
        if (Object.keys(doc).length === 0) { 
            console.log("room DNE"); // sponge: indicate to user that the room DNE
        } else {
            await addParticipant(userInfo, roomCode);
            doc = await getRoomInfo(roomCode);
            const [roomName, participants] = [doc.name, doc.participants];
            joinRoom({roomCode, roomName, participants});
            navigation.navigate("NewRoom");
        }
    };

    const handleSignOut = async () => {
        await signOutWithGoogle().then(() => {
            navigation.navigate("Login");
            signOut();
        }).catch((e) => {
            console.log("Error signing out: ", e)
        });
    };

    return(
        <View style={styles.container} >
            <Text style={styles.title}>Welcome, {firstName}</Text>
            <Pressable onPress={() => handleSignOut()}>
                <Text style={styles.subTitle}>Sign out</Text>
            </Pressable>
            <View style={styles.body}>
                <Text style={styles.bodyText}>Join room</Text>
                <TextInput 
                    onChangeText={text => setRoomCode(text)}
                    onSubmitEditing={async (e) => await handleSubmit(e)}/>
                <Text style={styles.bodyText}>or</Text>
                <NavButton title="Create room" onPress={() => navigation.navigate("CreateRoom")}/>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 40,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 50,
        textAlign: 'center',
    },
    subTitle: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
    },
    body: {
        marginTop: 150,
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

const Welcome = connect(
    mapStateToProps, 
    mapDispatchToProps
)(ConnectedWelcome);

export default Welcome;
