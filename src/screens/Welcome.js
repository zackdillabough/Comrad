import React, { useState } from 'react';
import { connect } from 'react-redux';
import { joinRoom } from '../redux/actions/roomControl';
import {View, StyleSheet, Pressable} from 'react-native';
import {Text, TextInput} from 'react-native-paper'
import NavButton from './../components/general/NavButton';
import { getRoomInfo } from './../services/room';

const mapStateToProps = (state) => ({
    user: state.signIn,
});

const mapDispatchToProps = (dispatch) => ({
    joinRoom: (roomInfo) => {
        dispatch(joinRoom(roomInfo));
    },

})

const ConnectedWelcome = ({navigation, user, joinRoom}) => {
    let [roomCode, setRoomCode] = useState('');
    let firstName = user.displayName.split(" ")[0]

    const handleSubmit = async () => {
        await getRoomInfo(roomCode).then((doc) => {
            if (Object.keys(doc).length === 0) { 
                // indicate to user that the room DNE
                console.log("room DNE"); // sponge
            } else {
                const [roomName, participants] = [doc.name, doc.participants];
                joinRoom({roomCode, roomName, participants})
                navigation.navigate("NewRoom");
            }
        }).catch((e) => console.log("error: " + e));
    };

    return(
        <View style={styles.container} >
            <Text style={styles.title}>Welcome, {firstName}</Text>
            <Pressable>
                <Text style={styles.subTitle}>Sign out</Text>
            </Pressable>
            <View style={styles.body}>
                <Text style={styles.bodyText}>Join room</Text>
                <TextInput 
                    onChangeText={text => setRoomCode(text)}
                    onSubmitEditing={(e) => handleSubmit(e)}/>
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
