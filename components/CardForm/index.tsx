import React from 'react';
import { View, ViewStyle } from 'react-native';
import { CardStyle } from './CardStyle';

interface CardFormProps {
    containerStyle?: ViewStyle;
    form: any[];
}

export function CardForm({ containerStyle, form }: CardFormProps) {
    return (
        <View style={[CardStyle.cardForm, containerStyle]}>
            {form}
        </View>
    );
}
