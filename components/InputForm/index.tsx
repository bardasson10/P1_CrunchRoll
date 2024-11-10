import React from 'react';
import { TextInput, ViewStyle } from 'react-native';
import { InputStyle } from './InputStyle';

interface InputFormProps {
    placeholder: string;
    onChangeText: (text: string) => void;
    value: string;
    containerStyle?: ViewStyle;
}

export function InputForm({
    placeholder,
    onChangeText,
    value,
    containerStyle
}: InputFormProps){
    return(
        <TextInput
            style={[InputStyle.inputForm, containerStyle]}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
        />
    );
}