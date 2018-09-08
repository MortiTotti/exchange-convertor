import React, { Component } from 'react';
import { Alert } from "react-native";
import { connect } from 'react-redux';
import Content from "./Content";
import { TARGET_COUNTRIES, BASE_CURRENCY } from "@Constants/Yas";
import NavigationService from "@Navigations/Navigation-Service";
import { getCurrencyRates } from "@Actions/Curreny-Rate-Action";

class SplashScreen extends Component {

  state = {
    isLoadingComplete: false,
  };

  constructor(props) {
    super(props);
  }

  _waitToLoadData = () => {

    let symbols = TARGET_COUNTRIES.map(t => t.symbol);
    let { getCurrencyRates } = this.props;
    getCurrencyRates(BASE_CURRENCY, symbols)
      .then(() => {
        NavigationService.navigate('App');
      }, (error) => {
        Alert.alert('Error', error.message, [ { text: 'Retry', onPress: () => this._waitToLoadData() } ], { cancelable: false } );
      });
  }

  componentDidMount() {
    this._waitToLoadData();
  }

  render() {
    return (
      <Content />
    );
  }
}

SplashScreen.navigationOptions = () => ({
  header: null,
});

const mapStateToProps = ({ currencyRates }) => ({
  isFetching: currencyRates.isFetching
});

export default connect(mapStateToProps, { getCurrencyRates })(SplashScreen);
