import React, { Component } from 'react';
import { connect } from "react-redux";
import Content from "./Content";
import { TARGET_COUNTRIES, BASE_CURRENCY } from "@Constants/Yas";
import { YasNavbarTitle } from "@Components";
import { digitGrouping } from "@Helpers/formatter";

class HomeScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      targetCurrencySymbol: '',           // DKK
      exchangeRateToTargetCurrency: 0,    // 1 EUR = 7.34 DKK
      amountInBaseCurrency: "1",          // 10 EUR
      calculatedTargetCurrency: "0.00"    // 73.4 EUR
    }
  }

  _onDataChange = (id, value) => {
    let {
      exchangeRateToTargetCurrency,
      amountInBaseCurrency,
      targetCurrencySymbol,
      calculatedTargetCurrency
    } = this.state;

    if (id == "amountInBaseCurrency") {
      amountInBaseCurrency = value;
    } else
      if (id == "targetCurrencySymbol") {
        targetCurrencySymbol = value;
        let { currencyRates } = this.props;
        exchangeRateToTargetCurrency = (value == "") ? 0 : currencyRates[targetCurrencySymbol];
      }

    let iAmountInBaseCurrency = (!amountInBaseCurrency) ? 0 : parseInt(amountInBaseCurrency);
    calculatedTargetCurrency = parseFloat(exchangeRateToTargetCurrency * iAmountInBaseCurrency).toFixed(2);

    this.setState({
      targetCurrencySymbol: targetCurrencySymbol,
      exchangeRateToTargetCurrency: exchangeRateToTargetCurrency,
      amountInBaseCurrency: amountInBaseCurrency,
      calculatedTargetCurrency: calculatedTargetCurrency
    });
  }

  render() {
    let { targetCurrencySymbol, amountInBaseCurrency, calculatedTargetCurrency } = this.state;
    let formattedCalculatedTargetCurrency = digitGrouping(calculatedTargetCurrency);
    return (
      <Content
        baseCurrencySymbol={BASE_CURRENCY}
        amountInBaseCurrency={amountInBaseCurrency}
        countries={TARGET_COUNTRIES}
        targetCurrencySymbol={targetCurrencySymbol}
        onDataChange={this._onDataChange}
        calculatedTargetCurrency={formattedCalculatedTargetCurrency}
      />
    );
  }
}

HomeScreen.navigationOptions = () => ({
  headerTitle: <YasNavbarTitle caption='Home' />
});

const mapStatesToProps = ({ currencyRates }) => ({
  currencyRates: currencyRates.rates
});

export default connect(mapStatesToProps)(HomeScreen);
