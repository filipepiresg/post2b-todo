import { produce } from 'immer';

import * as AppTypes from './types';

const INITIAL_STATE = {
  is_loading: false,
};

const app = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case AppTypes.START_REQUEST: {
        draft.is_loading = true;
        break;
      }
      case AppTypes.STOP_REQUEST: {
        draft.is_loading = false;
        break;
      }
      default:
    }
  });
};

export default app;
