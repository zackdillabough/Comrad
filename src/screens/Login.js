import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { signIn } from '../redux/actions/signIn';
import { bindActionCreators } from 'redux';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { signInWithGoogle } from './../services/auth';

const mapDispatchToProps = (dispatch) => ({
    signIn: (user) => {
        dispatch(signIn(user));
    },
})

const ConnectedLogin = ({navigation, signIn}) => {
    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
            webClientId:
            '650910790232-etl8h7pf5ccend10vqaf55i7jejgq0vd.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        });
    });

    const handleSignIn = async () => {
        await signInWithGoogle().then((user) => {
            signIn(user);
            navigation.navigate("Welcome");
        }).catch(() => { 
            console.log("login canceled"); 
        });
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Comrad</Text>
            <GoogleSigninButton style={styles.button} onPress={async () => await handleSignIn()}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 25,
        // marginBottom: 25,
    }
});

const Login = connect(
    null,
    mapDispatchToProps
)(ConnectedLogin)

export default Login;
