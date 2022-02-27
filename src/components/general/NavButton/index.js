import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles'

const NavButton = ({ title, onPress }) => {
    return(
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default NavButton;
