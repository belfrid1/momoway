import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';

export default function BienvenueText() {
    return (
        
        <View style={styles.text}>
            <Text style={styles.bienvenue}>
                Bienvenue
            </Text>
           
            <Text style={styles.sousText}>
                Se connecter pour continuer
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        justifyContent: 'center',
    },
    bienvenue:{
        textAlign: 'center',
        fontSize: 60,
        color: '#fff',
    },
    sousText:{
        textAlign: 'center',
        color: '#fff',
    }
})
