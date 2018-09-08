import { combineReducers } from 'redux';
import currencyRates from '@Reducers/currency-rates';

const rootReducer = combineReducers(
    {
        currencyRates
    });

export default rootReducer;
