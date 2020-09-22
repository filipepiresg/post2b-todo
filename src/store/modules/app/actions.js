import * as AppTypes from './types';

export function startRequest() {
  return {
    type: AppTypes.START_REQUEST,
  };
}

export function stopRequest() {
  return {
    type: AppTypes.STOP_REQUEST,
  };
}
