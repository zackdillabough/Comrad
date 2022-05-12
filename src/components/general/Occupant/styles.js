import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        backgroundColor: 'white',
        // borderTopWidth: 0,
        // borderLeftWidth: 0,
        // borderRightWidth: 0,
        // borderBottomWidth: 1,
        // marginBottom: -1,
    },
    img: {
        margin: 5,
        borderRadius: 25,
        width: 50,
        height: 50,
    },
    text: {
        marginLeft: 10,
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'gray',
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 25,
        elevation: 3,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
    },
});

export default styles;
