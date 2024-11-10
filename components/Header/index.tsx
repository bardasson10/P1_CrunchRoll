import React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import { HeaderStyle } from './HeaderStyle';

interface HeaderProps {
    containerStyle?: ViewStyle;
    text: string;
    icon: any;
}


export function Header({ text, icon, containerStyle }: HeaderProps) {
    return (
        <View style={[HeaderStyle.header, containerStyle]}>
            {icon}
            <Text style={[HeaderStyle.headerText, containerStyle]}>{text}</Text>
        </View>
    );
}