import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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
