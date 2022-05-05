import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createRoom } from '../redux/actions/createRoom';
import {View, StyleSheet, Pressable} from 'react-native';
import {Text, TextInput} from 'react-native-paper'
import NavButton from './../components/general/NavButton';

const mapDispatchToProps = (dispatch) => ({
    createRoom: (roomName) => {
        dispatch(createRoom(roomName));
    },
});

const setRoomName = (navigation, roomName, createRoom) => {
    createRoom(roomName);
    navigation.navigate("NewRoom");
};

const ConnectedCreateRoom = ({navigation, createRoom}) => {
    const [name, setName] = useState('');
    return(
        <View style={styles.container} >
            <View style={styles.body}>
                <Text style={styles.bodyText}>Room name</Text>
                <TextInput onChangeText={(text) => setName(text)}/>
                <NavButton title="Create room" onPress={() => setRoomName(navigation, name, createRoom)}/>
                <Pressable onPress={() => navigation.goBack()}>
                    <Text style={styles.subTitle}>Back</Text>
                </Pressable>
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

const CreateRoom = connect(
    null, 
    mapDispatchToProps
)(ConnectedCreateRoom);

export default CreateRoom;
