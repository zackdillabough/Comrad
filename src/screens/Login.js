import { connect } from 'react-redux';
import { signIn } from '../redux/actions/signIn';
import { bindActionCreators } from 'redux';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {Text, TextInput} from 'react-native-paper'
import auth from '@react-native-firebase/auth';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';


const mapDispatchToProps = (dispatch) => ({
    signIn: (user) => {
        dispatch(signIn(user));
    },
})

const ConnectedLogin = ({navigation, signIn}) => {

    signInWithGoogle = async (navigation) => {
        try {
            await GoogleSignin.hasPlayServices();
            const { accessToken, idToken } = await GoogleSignin.signIn();

            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            const userInfo = auth().signInWithCredential(googleCredential);

            userInfo.then(res => {
                user = {
                    first: userInfo._W.additionalUserInfo.profile.given_name,
                    last: userInfo._W.additionalUserInfo.profile.family_name,
                };
                signIn(user);
                navigation.navigate("Welcome");
            })
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            alert('Cancel');
            } else if (error.code === statusCodes.IN_PROGRESS) {
            alert('Sign-in already in progress');
            // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            alert('PLAY_SERVICES_NOT_AVAILABLE');
            // play services not available or outdated
            } else {
            // some other error happened
            }
        }
    };

    useEffect(() => {
    GoogleSignin.configure({
        scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
        webClientId:
        '650910790232-etl8h7pf5ccend10vqaf55i7jejgq0vd.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
    }, []);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Comrad</Text>
            <GoogleSigninButton style={styles.button} onPress={() => signInWithGoogle(navigation)}/>
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
