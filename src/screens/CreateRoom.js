import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createRoom } from '../redux/actions/roomControl';
import {View, StyleSheet, Pressable} from 'react-native';
import {Text, TextInput} from 'react-native-paper'
import NavButton from './../components/general/NavButton';
import firestore from '@react-native-firebase/firestore';
import { initRoom } from './../services/room'

const mapDispatchToProps = (dispatch) => ({
    createRoom: (roomName) => {
        dispatch(createRoom(roomName));
    },
});

const ConnectedCreateRoom = ({navigation, createRoom}) => {
    const [name, setName] = useState('');
    return(
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.body}>
                    <Text style={styles.bodyText}>Room name</Text>
                    <TextInput onChangeText={(text) => setName(text)}/>
                    <NavButton title="Create room" onPress={ async () => {
                            await initRoom(name).then((roomCode) => {
                                createRoom({"roomName": name, "roomCode" : roomCode, "participants" : []})
                                navigation.navigate("NewRoom");
                            });
                        }
                    }/>
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
