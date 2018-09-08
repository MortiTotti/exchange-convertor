import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Root from "./src";
import * as storeConfig from "@Store";

console.disableYellowBox = true;

if (__DEV__)
{
  global.XMLHttpRequest = global.originalXMLHttpRequest ?
      global.originalXMLHttpRequest :
      global.XMLHttpRequest;
  global.FormData = global.originalFormData ?
      global.originalFormData :
      global.FormData;
  fetch; // Ensure to get the lazy property

  if (window.__FETCH_SUPPORT__) { // it's RNDebugger only to have
      window.__FETCH_SUPPORT__.blob = false;
  } else {
      global.Blob = global.originalBlob ?
          global.originalBlob :
          global.Blob;
      global.FileReader = global.originalFileReader ?
          global.originalFileReader :
          global.FileReader;
  }
}

const App = () =>
  <Provider store={storeConfig.store}>
    <PersistGate loading={null} persistor={storeConfig.persistor}>
      <Root />
    </PersistGate>
  </Provider>

export default App;
