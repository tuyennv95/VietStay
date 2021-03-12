import {createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from './reducers/reducers';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const persistConfig ={
    key:'root',
    storage: storage,
    whitelist: ['login','booking'],

}

const pReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
    pReducer, 
    composeWithDevTools(applyMiddleware(thunk)),
    );
export const persistor = persistStore(store);