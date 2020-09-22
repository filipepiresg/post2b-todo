import { createStore, compose, applyMiddleware } from 'redux';

import Reactotron from '../config/tron';

export default (reducers, middlewares) => {
  const enhancer =
    __DEV__ && Reactotron.createEnhancer
      ? compose(Reactotron.createEnhancer(), applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
