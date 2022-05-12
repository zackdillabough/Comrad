import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles'

const NavButton = ({ title, style, onPress }) => {
    return(
        <Pressable style={[styles.button, style?.button]} onPress={onPress}>
            <Text style={[styles.text, style?.text]}>{title}</Text>
        </Pressable>
    );
};

export default NavButton;
