import React, { useState } from 'react';
import { connect } from 'react-redux';
import { joinRoom } from '../redux/actions/roomControl';
import { signOut } from '../redux/actions/userControl';
import NavButton from './../general/NavButton';

const mapStateToProps = (state) => ({
    userInfo: state.userControl,
    roomInfo: state.roomControl,
});

const ConnectedCheckStoreContents = ({userInfo, roomInfo}) => {
    const handlePress = () => {
        console.log("user info: ");
        console.log(userInfo);
        console.log("room info: ");
        console.log(roomInfo);
    }

    return (
        <NavButton title="check store" onPress={() => handlePress()}/>
    );
}

const CheckStoreContents = connect(
    mapStateToProps, 
    null,
)(ConnectedCheckStoreContents);

export default CheckStoreContents;
