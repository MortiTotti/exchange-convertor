import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from "@Reducers";

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
    blacklist: []
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export const store = createStore(persistedReducer, undefined, applyMiddleware(thunk, logger));
export const persistor = persistStore(store);
