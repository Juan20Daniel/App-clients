import React from 'react';
import { View, Text,TextInput } from 'react-native';
import { inputGroupStyle } from './InputGroupStyle';

const InputGruop = ({ setState, name, type }) => {

    return (
        <View style={inputGroupStyle.inputGroup}>
            <Text style={inputGroupStyle.text}>{name}</Text>
            <TextInput 
                keyboardType={type} 
                style={inputGroupStyle.input} 
                onChangeText={setState}
            />
        </View>
    );
}

export default InputGruop;