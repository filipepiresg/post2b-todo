import storage from 'redux-persist/'
import { persistReducer } from 'redux-persist';


export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'TodoApp',
      storage,
      whitelist: ['todo'],
    },
    reducers
  );

  return persistedReducer;
};
