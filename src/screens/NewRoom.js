import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Text, TextInput } from 'react-native-paper'
import NavButton from './../components/general/NavButton';
import Occupant from './../components/general/Occupant';

const mapStateToProps = (state) => ({
    roomInfo: state.roomControl,
})

const ConnectedNewRoom = ({navigation, roomInfo}) => {
    const muteStyle = {button: {marginBottom: 10}};
    const leaveStyle = {button: {backgroundColor: "red" }, text: {color: "white"}};
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{roomInfo.roomName}</Text>
            <Text style={styles.subTitle}>Room code: {roomInfo.roomCode}</Text>
            <View style={styles.occupantsCtr}>
                <Text style={[styles.subTitle, {marginBottom: 10}]}>Occupants</Text>
                <ScrollView style={styles.occupantsList}>
                    <Occupant info={{name: "Zack"}} onPress={() => console.log("hello")}/>
                </ScrollView>
            </View>
            <View style={styles.bottomCtr}>
                <NavButton title="Mute" style={muteStyle}/>
                <NavButton title="Leave room" style={leaveStyle} onPress={() => navigation.navigate("Welcome")}/>
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
    mapStateToProps
)(ConnectedNewRoom);

export default NewRoom;
