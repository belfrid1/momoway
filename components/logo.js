import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';

export default function Logo() {
    return (
        <Image 
        style={styles.image}
        source={require('../assets/img/logo_nbu.png')}
        resizeMode='contain'

    />
    );
}

const styles = StyleSheet.create({
    image:{
        height:150,
        width:'50%',
        marginHorizontal:95,

    }
})
