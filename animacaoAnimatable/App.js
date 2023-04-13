import React, { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from 'react-native-animatable';

const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App() {

  const buttonRef = useRef(null);

  const handleClick = () => {
    // alert('TTT')
    buttonRef.current.shake();
  }

  return (

    <View style={styles.container}>
      <Animatable.Text
        style={styles.title}
        // iterationCount={'infinite'}
        // duration={4000}
        animation='shake'
      >
        Oi
      </Animatable.Text>

      <ButtonAnimated
        style={styles.button}
        animation='pulse'
        ref={buttonRef}
        onPress={handleClick}
      >
        <Text style={styles.buttonText}>Animar</Text>
      </ButtonAnimated>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#000000'
  },

  button: {
    width: '70%',
    padding: 10,
    backgroundColor: '#050505',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    borderRadius: 10
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700'
  }

});
