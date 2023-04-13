import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

export const Teste = () => {

    const larAnimada = useRef(new Animated.Value(150)).current;
    const altAnimada = useRef(new Animated.Value(50)).current;

    useEffect(() => {

        Animated.loop(
            Animated.sequence([
                Animated.timing(larAnimada, {
                    toValue: 300,
                    duration: 2000,
                    useNativeDriver: false
                }),

                Animated.timing(larAnimada, {
                    toValue: 150,
                    duration: 2000,
                    useNativeDriver: false
                }),
            ])
        ).start();

    }, []);

    return (
        <View style={styles.container}>

            <Animated.View
                style={{
                    width: larAnimada,
                    height: altAnimada,
                    backgroundColor: '#4169e1',
                    justifyContent: 'center',
                    borderRadius: 50
                }}
            >
                <Text style={styles.text}>Carrigando...</Text>
            </Animated.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    container2: {
        // width: 250,
        // width: larAnimada,
        height: 50,
        // backgroundColor: '#4169e1',
        justifyContent: 'center',
    },

    text: {
        textAlign: 'center',
        fontSize: 22,
        color: '#FFFFFF'
    }
});
