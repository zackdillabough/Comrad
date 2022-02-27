import React from 'react';
import NavButton from '../components/general/NavButton/index'
import {View} from 'react-native'

const Demo = ({ navigation }) => {
    return(
        <View>
            <NavButton title="Make Call" />
            <NavButton title="Accept Call" />
            <NavButton title="Stop Call" />
        </View>
    );
};

export default Demo;
