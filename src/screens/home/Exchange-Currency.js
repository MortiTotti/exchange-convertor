import React from 'react';
import { View, Picker, StyleSheet } from 'react-native';
import YasDimensions from "@Constants/Yas-Dimensions";
import { YasText } from "@Components";
import YasColors from '@Constants/Yas-Colors';

const ExchangeCurrency = ({ countries, targetCurrencySymbol, onDataChange, calculatedTargetCurrency }) =>
    <View style={styles.container}>
        <View style={styles.symbol}>
            <Picker
                selectedValue={targetCurrencySymbol}
                mode="dropdown"
                style={styles.picker}
                onValueChange={(selectedValue) => onDataChange('targetCurrencySymbol', selectedValue)}>
                <Picker.Item label='Pick one' value='' />
                {
                    countries.map((item, index) => <Picker.Item key={index + 1} label={item.country} value={item.symbol} />)
                }
            </Picker>
        </View>
        <View style={styles.value}>
            <YasText>{`${calculatedTargetCurrency}`}</YasText>
            <View style={styles.exchangeSymbol}>
                <YasText>{targetCurrencySymbol}</YasText>
            </View>
        </View>
    </View>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: YasDimensions.width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: YasColors.contentRowbg.normal,
        padding: YasDimensions.padding
    },
    symbol: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    value: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: YasDimensions.textPadding
    },
    exchangeSymbol: {
        width: '20%',
        position: 'absolute',
        right: 0
    },
    picker: {
        width: '100%'
    }
});

export default ExchangeCurrency;
