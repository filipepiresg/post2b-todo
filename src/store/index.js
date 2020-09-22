import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import Reactotron from '../config/tron';
import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import persistReducers from './persistReducer';

const sagaMonitor = Reactotron.createSagaMonitor ? Reactotron.createSagaMonitor() : undefined;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
