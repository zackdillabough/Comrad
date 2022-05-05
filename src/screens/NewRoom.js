import React from 'react';
import { connect } from 'react-redux';
import {View, StyleSheet, Pressable} from 'react-native';
import {Text, TextInput} from 'react-native-paper'
import NavButton from './../components/general/NavButton';

const mapStateToProps = (state) => ({
    roomName: state.createRoom,
})

const ConnectedNewRoom = ({navigation, roomName}) => {
    console.log(roomName)
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to room: {roomName.roomName}</Text>
            <Pressable onPress={() => navigation.goBack()}>
                <Text style={styles.subTitle}>Back</Text>
            </Pressable>

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

const NewRoom = connect(mapStateToProps)(ConnectedNewRoom);

export default NewRoom;
