import React from 'react';
import { Pressable, Text, Image } from 'react-native';
import styles from './styles'

const Occupant = ({ info, onPress }) => {
    return(
        <Pressable style={styles.container} onPress={onPress}>
            <Image style={styles.img} source={require("./generic_profpic.png")} />
            <Text style={styles.text}>{info.name}</Text>
        </Pressable>
    );
};

export default Occupant;
