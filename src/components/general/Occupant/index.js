import React from 'react';
import { Pressable, Text, Image } from 'react-native';
import styles from './styles'

const Occupant = ({ info, onPress }) => {
    return(
        <Pressable style={styles.container} onPress={onPress}>
            <Image style={styles.img} source={info.photoURL == "" ?  require("./generic_profpic.png") : {uri: info.photoURL}}/>
            <Text style={styles.text}>{info.name}</Text>
        </Pressable>
    );
};

export default Occupant;
// 
