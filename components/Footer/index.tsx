import React from 'react';
import { View, Text} from 'react-native';
import { FooterStyle } from './FooterStyle';
import DropDownPicker from 'react-native-dropdown-picker';
import { Picker } from '@react-native-picker/picker';

interface footerProps {
    
}



export function Footer() {
        const languages: { label: string, value: string }[] = [
            { label: 'Português', value: 'pt' },
            { label: 'English', value: 'en' },
            { label: 'Español', value: 'es' },
            { label: 'Français', value: 'fr' },
            { label: 'Deutsch', value: 'de' },
            { label: 'العربية', value: 'ar' },
        ];
    return (
        <View style={FooterStyle.footerContainer}>
            <View style={FooterStyle.containerFooterUp}>
                <Text style={FooterStyle.footerTextUp}>Termos de uso</Text>
                <Text style={FooterStyle.footerTextUp}>Política de Privacidade</Text>
                <Text style={FooterStyle.footerTextUp}>Ferramenta de Consentimento de Cookies</Text>
            </View>
            <View></View>
            <View style={FooterStyle.containerFooterDown}>
                <Text style={FooterStyle.footerTextD}>SONY PICTURES</Text>
                <Text style={FooterStyle.footerTextDown}>© Crunchyroll, LLC</Text>
            <Picker
                style={FooterStyle.dropDown}
                selectedValue="pt"
                onValueChange={(itemValue) => console.log(itemValue)}

            >
                {languages.map((language) => (
                    <Picker.Item key={language.value} label={language.label} value={language.value} />
                ))}
            </Picker>
            </View>
        </View>
    );
}