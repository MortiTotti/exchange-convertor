import currencyRate from '@Reducers/currency-rates'
import * as actiontypes from '@Constants/Action-Types'
import { BASE_CURRENCY, TARGET_COUNTRIES, NETWORK_STATUS_CODE } from '@Constants/Yas';

let currencySymbols = TARGET_COUNTRIES.map(t => t.symbol);

describe('currency rate reducer', () => {
  it('should return the initial state', () => {
    // arrange
    let expectedState = {
      isFetching: false,
      error: { code: "", message: "" },
      currencySymbols: [],
      base: BASE_CURRENCY,
      rates: {}
    };

    // act
    let actualState = currencyRate(undefined, {});

    // assert
    expect(actualState).toEqual(expectedState);
  });

  it('should handle the currency rate request action', () => {

    // arrange
    let expectedState = {
      isFetching: true,
      error: { code: "", message: "" },
      currencySymbols: currencySymbols,
      base: BASE_CURRENCY,
      rates: {}
    };

    // act
    let actualState = currencyRate(undefined,
      {
        type: actiontypes.CURRENCY_RATE.REQUESTED,
        payload: {
          currencySymbols
        }
      });

    // assert
    expect(actualState).toEqual(expectedState);
  });

  it('should handle the currency rate failed action', () => {

    // arrange
    let expectedState = {
      isFetching: false,
      error: NETWORK_STATUS_CODE.NET_PROTOCOL_ERROR,
      currencySymbols: [],
      base: BASE_CURRENCY,
      rates: {}
    };

    // act
    let actualState = currencyRate(undefined,
      {
        type: actiontypes.CURRENCY_RATE.REQUEST_FAILED,
        payload: {
          ...NETWORK_STATUS_CODE.NET_PROTOCOL_ERROR
        }
      });

    // assert
    expect(actualState).toEqual(expectedState);
  });

  it('should handle the currency rate received successfull action', () => {

    // arrange
    let expectedState = {
      isFetching: false,
      error: { code: "", message: "" },
      currencySymbols: currencySymbols,
      base: BASE_CURRENCY,
      rates: { "USD": 1.155996, "DKK": 7.457422, "INR": 83.324629, "THB": 37.928651 }
    };

    // act
    let actualState = currencyRate({ currencySymbols },
      {
        type: actiontypes.CURRENCY_RATE.RECEIVED,
        payload: {
          base: BASE_CURRENCY,
          rates: { "USD": 1.155996, "DKK": 7.457422, "INR": 83.324629, "THB": 37.928651 }
        }
      });

    // assert
    expect(actualState).toEqual(expectedState);
  });
});