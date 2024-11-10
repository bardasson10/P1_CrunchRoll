// ButtonGlobal.tsx
import React from "react";
import { TouchableOpacity, Text, ViewStyle, TextStyle } from "react-native";
import { ButtonStyle } from "./ButtonStyle";

// Defina as propriedades para o botão
interface ButtonGlobalProps {
    title: string;
    onPress: () => void;
    containerStyle?: ViewStyle;
    textStyle?: TextStyle;
}

export function ButtonForm({
    title,
    onPress,
    containerStyle,
}: ButtonGlobalProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={[ButtonStyle.buttonForm, containerStyle]}>{title}</Text>
        </TouchableOpacity>
    );
}