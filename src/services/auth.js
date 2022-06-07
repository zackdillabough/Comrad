import { useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';


const saveUserToFirestore = (user) => {
    const userRef = firestore().collection('user');
    userRef.doc(user.uid).set({
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        email: user.email,
    })
};

export const signInWithGoogle = async () => {
    try {
        let user = {};
        await GoogleSignin.hasPlayServices();
        const { accessToken, idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        const userInfo = auth().signInWithCredential(googleCredential);
        await userInfo.then(res => {
            user = {
                displayName: userInfo._W.user.displayName,
                email:       userInfo._W.user.email,
                uid:         userInfo._W.user.uid,
                photoURL:    userInfo._W.user.photoURL,
            };
        });

        return user

    } catch (error) {
        // user cancelled the login flow
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            alert('Cancel');

        // operation (f.e. sign in) is in progress already
        } else if (error.code === statusCodes.IN_PROGRESS) {
            alert('Sign-in already in progress');

        // play services not available or outdated
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            alert('PLAY_SERVICES_NOT_AVAILABLE');

        // some other error happened
        } else {
            console.log(error);
        }
    }
};

