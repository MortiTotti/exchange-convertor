import React from 'react';
import { View, StyleSheet } from 'react-native';
import YasDimensions from "@Constants/Yas-Dimensions";
import { YasText, YasTextInput } from "@Components";
import YasColors from '@Constants/Yas-Colors';

const BaseCurrency = ({ baseCurrencySymbol, amountInBaseCurrency, onDataChange }) =>
    <View style={styles.container}>
        <View style={styles.title}>
            <YasText style={styles.baseText}>{baseCurrencySymbol}</YasText>
        </View>
        <View style={styles.value}>
            <YasTextInput
                style={styles.baseInput}
                keyboardType='numeric'
                onChangeText={(value) => onDataChange('amountInBaseCurrency', value)}
                value={`${amountInBaseCurrency}`}
                maxLength={8}
            />
        </View>
    </View>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: YasDimensions.width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: YasColors.contentRowbg.opposite,
        padding: YasDimensions.padding
    },
    baseText: {
        fontWeight: 'bold',
        paddingLeft: YasDimensions.padding
    },
    baseInput: {
        width: '80%'
    },
    title: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    value: {
        flex: 1
    }
});

export default BaseCurrency;
