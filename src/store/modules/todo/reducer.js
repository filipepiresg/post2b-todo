import { produce } from 'immer';
import { v4 as uuidv4 } from 'uuid';

import * as TodoTypes from './types';

const INITIAL_STATE = {
  data: [],
};

const todo = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case TodoTypes.ADD_TODO: {
        draft.data = [
          ...state.data,
          {
            id: uuidv4(),
            title: action.payload.title,
            description: action.payload.description,
            status: action.payload.status,
          },
        ];
        break;
      }
      case TodoTypes.EDIT_TODO: {
        draft.data = state.data.map((item) =>
          item.id === action.payload.id ? { ...action.payload } : item
        );
        break;
      }
      case TodoTypes.REMOVE_TODO: {
        draft.data = state.data.filter((item) => item.id !== action.payload);
        break;
      }
      case TodoTypes.CHANGE_TODO: {
        draft.data = state.data.map((item) =>
          item.id === action.payload.id ? { ...item, status: action.payload.status } : item
        );
        break;
      }
      default:
    }
  });
};

export default todo;
