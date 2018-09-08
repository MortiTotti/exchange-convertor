import { Platform } from "react-native";

export const FONT_FAMILY = (Platform.OS == 'ios') ? 'helvetica-neue' : 'roboto';

export const NETWORK_STATUS_CODE = {
  NET_PROTOCOL_ERROR: { code: 900, message: 'Netowork protocol error' },
  NET_UNHANDLED_ERROR: { code: 901, message: 'Netowork unhandled error' }
}

const DEVELOPMENT_URL = {
  GET_CURRENY_RATE: "http://data.fixer.io/api/latest?access_key=365f0c828197655ab2ae13e87e802a56"
};
const PRODUCTION_URL = {
  GET_CURRENY_RATE: "http://data.fixer.io/api/latest?access_key=365f0c828197655ab2ae13e87e802a56"
};

export const HOST_URL = (__DEV__) ? DEVELOPMENT_URL : PRODUCTION_URL;

export default {
  FONT_FAMILY,
  HOST_URL,
  NETWORK_STATUS_CODE
}

export const BASE_CURRENCY = "EUR";

export const TARGET_COUNTRIES = [
  { country: 'Denmark', symbol: 'DKK' },
  { country: 'India', symbol: 'INR' },
  { country: 'USA', symbol: 'USD' },
  { country: 'Thailand', symbol: 'THB' },
];