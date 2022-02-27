import React from 'react';
// import 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import HomeStackNavigator from './src/navigation/home/HomeStackNavigator'

// call main.js
// if user authenticated --> home.js
// if user unauthenticated --> auth.js

//return <MainStackNavigator />;

export default function App() {
    return <HomeStackNavigator />;
};
