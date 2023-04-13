import React, { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

export const Interpolate = () => {

    const [isFinished, setIsFinished] = useState(false);
    const larAnimada = useRef(new Animated.Value(0)).current;
    const altAnimada = useRef(new Animated.Value(50)).current;

    useEffect(() => {

        Animated.sequence([
            Animated.timing(larAnimada, {
                toValue: 100,
                duration: 3000,
                useNativeDriver: false
            }),

            Animated.timing(altAnimada, {
                toValue: 100,
                duration: 3000,
                useNativeDriver: false
            })
        ]).start(({ finished }) => {
            setIsFinished(finished);
        });

    }, []);

    let porcentagemLargura = larAnimada.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%']
    });

    let porcentagemAltura = altAnimada.interpolate({
        inputRange: [50, 100],
        outputRange: ['5%', '100%']
    });

    return (
        <View style={styles.container}>

            <Animated.View
                style={{
                    width: porcentagemLargura,
                    height: porcentagemAltura,
                    backgroundColor: '#4169e1',
                    justifyContent: 'center',
                }}
            >
                {isFinished ?
                    <Text style={styles.text2}>Vasco da Gama</Text>
                    :
                    null
                }
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
    },

    text2: {
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'center',
        color: '#FFFFFF'
    }
});
