import React from 'react';
import { connect } from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {Text, TextInput} from 'react-native-paper'
import NavButton from './../components/general/NavButton';

const mapStateToProps = (state) => ({
    user: state.signIn,
})

const ConnectedWelcome = ({navigation, user}) => {
    return(
        <View style={styles.container} >
            <Text style={styles.title}>Welcome, {user.userName.first}</Text>
            <Text style={styles.subTitle}>Sign out</Text>
            <View style={styles.body}>
                <Text style={styles.bodyText}>Join room</Text>
                <TextInput />
                <Text style={styles.bodyText}>or</Text>
                <NavButton title="Create room"/>
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

const Welcome = connect(mapStateToProps)(ConnectedWelcome);

export default Welcome;
