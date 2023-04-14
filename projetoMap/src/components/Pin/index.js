import React from 'react';
import { Text, View } from 'react-native';
import { pinStyle } from './styles';

export const Pin = ({ corFundo, aviso }) => {

    return (
        <View style={[pinStyle.viewMarker, { backgroundColor: corFundo }]}>
            <Text style={pinStyle.textoMarker}>{aviso}</Text>
        </View>
    );
}
