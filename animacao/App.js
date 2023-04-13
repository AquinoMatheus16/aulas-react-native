import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { Teste } from "./Teste";
import { Interpolate } from "./Interpolate";

export default function App() {

  const larAnimada = useRef(new Animated.Value(150)).current;
  const altAnimada = useRef(new Animated.Value(50)).current;
  // const opacidadeAnimada = useRef(new Animated.Value(1)).current;
  const opacidadeAnimada = useRef(new Animated.Value(0)).current;

  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {

    /* ====== timing (normal) ====== */
    // Animated.timing(larAnimada, {
    //   toValue: 300,
    //   duration: 2000,
    //   useNativeDriver: false
    // }).start();

    /* ====== Sequence ====== */
    // Animated.sequence([
    //   Animated.timing(larAnimada, {
    //     toValue: 300,
    //     duration: 2000,
    //     useNativeDriver: false
    //   }),

    //   Animated.timing(altAnimada, {
    //     toValue: 200,
    //     duration: 2000,
    //     useNativeDriver: false
    //   }),

    //   Animated.timing(opacidadeAnimada, {
    //     toValue: 0,
    //     duration: 1000,
    //     useNativeDriver: false
    //   }),
    // ]).start();

    /* ====== Parallel ====== */
    // Animated.parallel([
    //   Animated.timing(larAnimada, {
    //     toValue: 300,
    //     duration: 1500,
    //     useNativeDriver: false
    //   }),

    //   Animated.timing(altAnimada, {
    //     toValue: 200,
    //     duration: 1500,
    //     useNativeDriver: false
    //   }),
    // ]).start();

    /* ====== Sequence / parallel ====== */
    Animated.sequence([
      Animated.timing(opacidadeAnimada, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false
      }),

      Animated.parallel([
        Animated.timing(larAnimada, {
          toValue: 300,
          duration: 2000,
          useNativeDriver: false
        }),

        Animated.timing(altAnimada, {
          toValue: 200,
          duration: 2000,
          useNativeDriver: false
        }),
      ]),

      Animated.timing(opacidadeAnimada, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: false
      }),

    ]).start();

  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.timing(
        spinValue,
        {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }
      )
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  return (
    //  <View style={styles.container}>

    //    {/* <Animated.View
    //     style={{
    //       width: larAnimada,
    //       height: altAnimada,
    //       backgroundColor: '#4169e1',
    //       justifyContent: 'center',
    //       opacity: opacidadeAnimada
    //     }}
    //   >
    //     <Text style={styles.text}>Carrigando...</Text>

    //   </Animated.View>

    //   <Animated.View
    //     style={{
    //       width: 15,
    //       height: 40,
    //       backgroundColor: '#4169e1',
    //       borderRadius: 50,
    //       transform: [{ rotate: spin }],
    //       justifyContent: 'center',
    //       alignItems: 'center'
    //     }}
    //   >
    //   </Animated.View>  */}

    //   {/* <Teste /> */}

    // </View>

    <Interpolate />
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
