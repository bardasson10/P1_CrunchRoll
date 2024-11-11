import React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import { HeaderStyle } from './HeaderStyle';

interface HeaderProps {
    containerStyle?: ViewStyle;
    text: string;
    icon: any;
    nav: any;
    search: any;
    photo: any;
    arrowIcon: any;
}


export function Header({ text, nav, icon, search, photo, arrowIcon, containerStyle }: HeaderProps) {
    return (
        <View style={[HeaderStyle.header, containerStyle]}>
                {nav}
                {icon}
            <Text style={[HeaderStyle.headerText, containerStyle]}>{text}</Text>
            <View style={[HeaderStyle.RightNav]}>
                {search}
                {photo}
                {arrowIcon}
            </View>
        </View>
    );
}