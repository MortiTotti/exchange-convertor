import * as types from '@Constants/Action-Types';
import { NETWORK_STATUS_CODE, HOST_URL } from '@Constants/Yas';

const _currencyRateRequested = (currencySymbols) => ({
    type: types.CURRENCY_RATE.REQUESTED,
    payload: { currencySymbols }
});

const _currencyRateRequestFailed = error => ({
    type: types.CURRENCY_RATE.REQUEST_FAILED,
    payload: { error }
});

const _currencyRateReceived = (base, rates) => ({
    type: types.CURRENCY_RATE.RECEIVED,
    payload: { base, rates }
});

const getCurrencyRateApi = (base, currencies) => {
    let url = `${HOST_URL.GET_CURRENY_RATE}&base=${base}&symbols=${currencies.join(',')}`;
    return fetch(url)
        .then(response => response.json())
        .catch(error => {
            return Promise.reject(NETWORK_STATUS_CODE.NET_PROTOCOL_ERROR);
        });
};

export const getCurrencyRates = (base, currencySymbols) => (dispatch) => {
    dispatch(_currencyRateRequested(currencySymbols));

    return getCurrencyRateApi(base, currencySymbols)
        .then(responseJson => {
            let { success, error, rates } = responseJson;
            if (!success) {
                dispatch(_currencyRateRequestFailed(error));
                return Promise.reject(error);
            }

            dispatch(_currencyRateReceived(base, rates));
            return Promise.resolve(rates);
        })
        .catch(error => {
            dispatch(_currencyRateRequestFailed(error));
            return Promise.reject(error);
        });
};
