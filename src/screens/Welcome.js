import React, { useState } from 'react';
import { connect } from 'react-redux';
import {View, StyleSheet, Pressable} from 'react-native';
import {Text, TextInput} from 'react-native-paper'
import NavButton from './../components/general/NavButton';
import firestore from '@react-native-firebase/firestore';

const mapStateToProps = (state) => ({
    user: state.signIn,
})

const ConnectedWelcome = ({navigation, user}) => {
    let [roomCode, setRoomCode] = useState('');

    const handleSubmit = () => {
        checkRoomExistence(roomCode);
    };

    const checkRoomExistence = async (roomCode) => {
        var docRef = firestore().collection("rooms").doc(roomCode);
        await docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("success");
                // enter room

            } else {
            // else { tell user room does not exist }
                console.log("dne");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    };

    return(
        <View style={styles.container} >
            <Text style={styles.title}>Welcome, {user.userName.first}</Text>
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

const Welcome = connect(mapStateToProps)(ConnectedWelcome);

export default Welcome;
