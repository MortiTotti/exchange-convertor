import * as actiontype from '@Constants/Action-Types';

const initState = {
  isFetching: false,
  error: { code: "", message: "" },
  currencySymbols: [],
  base: "EUR",
  rates: {}
};

const currencyRate = (state = initState, action) => {
  switch (action.type) {
    //------------------- search most recent
    case actiontype.CURRENCY_RATE.REQUESTED: {
      return Object.assign({}, state, { isFetching: true, ...action.payload, error: { code: "", message: "" } });
    }
    case actiontype.CURRENCY_RATE.REQUEST_FAILED: {
      return Object.assign({}, state, { isFetching: false, error: { ...action.payload } });
    }
    case actiontype.CURRENCY_RATE.RECEIVED: {
      return Object.assign({}, state, { isFetching: false, ...action.payload, error: { code: "", message: "" } });
    }
    default: return state;
  }
};

export default currencyRate;
