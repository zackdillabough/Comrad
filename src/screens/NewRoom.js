import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Text, TextInput } from 'react-native-paper'
import { joinRoom, leaveRoom } from './../redux/actions/roomControl';
import { removeParticipant } from './../services/room';
import NavButton from './../components/general/NavButton';
import Occupant from './../components/general/Occupant';
import CheckStoreContents from './../components/debug/CheckStoreContents';
import firestore from '@react-native-firebase/firestore';

const mapStateToProps = (state) => ({
    roomInfo: state.roomControl,
    userInfo: state.userControl,
});

const mapDispatchToProps = (dispatch) => ({
    leaveRoom: () => {
        dispatch(leaveRoom());
    },
    updateRoom: (roomInfo) => {
        dispatch(joinRoom(roomInfo));
    }
});

const ConnectedNewRoom = ({navigation, userInfo, roomInfo, leaveRoom, updateRoom}) => {
    const muteStyle = {button: {marginBottom: 10}};
    const leaveStyle = {button: {backgroundColor: "red" }, text: {color: "white"}};

    const handleLeaveRoom = () => {
        removeParticipant(userInfo.uid, roomInfo.roomCode);
        leaveRoom();
        navigation.navigate("Welcome");
    };

    useEffect(() => {
        const subscriber = firestore()
            .collection('rooms')
            .doc(roomInfo.roomCode)
            .onSnapshot(documentSnapshot => {
                let data = documentSnapshot.data();
                if (typeof data !== "undefined")
                    updateRoom({
                        roomName: data.name, 
                        roomCode: roomInfo.roomCode, 
                        participants: data.participants,
                    });
            });

        // stop listening for updates when no longer required
        return () => subscriber();
    });

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{roomInfo.roomName}</Text>
            <Text style={styles.subTitle}>Room code: {roomInfo.roomCode}</Text>
            <View style={styles.occupantsCtr}>
                <Text style={[styles.subTitle, {marginBottom: 10}]}>Occupants</Text>
                <ScrollView style={styles.occupantsList}>
                    { Object.keys(roomInfo.participants).map((key) => 
                    <Occupant key={key} info={{name: roomInfo.participants[key].displayName, photoURL: roomInfo.participants[key].photoURL}}/>)
                    }
                </ScrollView>
            </View>
            <View style={styles.bottomCtr}>
                <NavButton title="Mute" style={muteStyle}/>
                <NavButton title="Leave room" style={leaveStyle} onPress={() => handleLeaveRoom()}/>
                <Pressable onPress={() => navigation.goBack()}>
                    <Text style={styles.subTitle}>Back</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        margin: 30,
        marginTop: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 50,
        textAlign: 'left',
    },
    subTitle: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        textAlign: 'left',
    },
    occupantsCtr: {
        marginVertical: 20,
        height: "60%",
        // marginTop: 20,
        // marginBottom: 20,
    },
    occupantsList: {
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white',
    },
    bottomCtr: {
        padding: 20,
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

const NewRoom = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ConnectedNewRoom);

export default NewRoom;
