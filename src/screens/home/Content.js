import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { YasContainer, YasContent, YasText } from "@Components";
import BaseCurrency from "./Base-Currency";
import ExchangeCurrency from "./Exchange-Currency";
import screenStyle from "./style";

const Content = ({
    baseCurrencySymbol,
    amountInBaseCurrency,
    countries,
    targetCurrencySymbol,
    onDataChange,
    calculatedTargetCurrency }) =>

    <YasContainer>
        <YasContent>
            <View style={screenStyle.header}>
                <YasText>Currency Exchange</YasText>
            </View>
            <View style={screenStyle.content}>
                <View style={screenStyle.rows}>
                    <BaseCurrency
                        baseCurrencySymbol={baseCurrencySymbol}
                        amountInBaseCurrency={amountInBaseCurrency}
                        onDataChange={onDataChange}
                    />
                    <ExchangeCurrency
                        countries={countries}
                        targetCurrencySymbol={targetCurrencySymbol}
                        onDataChange={onDataChange}
                        calculatedTargetCurrency={calculatedTargetCurrency}
                    />
                </View>
            </View>
        </YasContent>
    </YasContainer>

Content.propTypes = {
  baseCurrencySymbol: PropTypes.string.isRequired,
  amountInBaseCurrency: PropTypes.string,
  countries: PropTypes.array.isRequired,
  targetCurrencySymbol: PropTypes.string.isRequired,
  onDataChange: PropTypes.func.isRequired,
  calculatedTargetCurrency: PropTypes.string
}

export default Content;
