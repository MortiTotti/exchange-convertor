import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getCurrencyRates } from "@Actions/Curreny-Rate-Action";
import * as types from '@Constants/Action-Types';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import { BASE_CURRENCY, TARGET_COUNTRIES, HOST_URL } from '@Constants/Yas';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
let base = BASE_CURRENCY;
let currencySymbols = TARGET_COUNTRIES.map(t => t.symbol);

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('creates CURRENCY_RATE.RECEIVED when fetching currency rates has been done', () => {

        // arrange
        let url = `${HOST_URL.GET_CURRENY_RATE}&base=${base}&symbols=${currencySymbols.join(',')}`;
        fetchMock
            .getOnce(url,
                {
                    body: {
                        "success": true,
                        "timestamp": 1536351256,
                        "base": "EUR",
                        "date": "2018-09-07",
                        "rates": { "USD": 1.155996, "DKK": 7.457422, "INR": 83.324629, "THB": 37.928651 }
                    },
                    headers: { 'content-type': 'application/json' }
                }
            );

        const expectedActions = [
            { type: types.CURRENCY_RATE.REQUESTED, payload: { currencySymbols } },
            { type: types.CURRENCY_RATE.RECEIVED, payload: { base: BASE_CURRENCY, rates: { "USD": 1.155996, "DKK": 7.457422, "INR": 83.324629, "THB": 37.928651 } } }
        ]
        const store = mockStore({ currencyRate: {} })

        // act, assert
        return store.dispatch(getCurrencyRates(base, currencySymbols)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})