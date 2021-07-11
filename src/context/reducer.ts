import { Reducer } from 'react';
import { StateType } from '../types';
import { ActionTypes } from '../utils/enums';
import { Action } from './actions';

export const reducer: Reducer<StateType, Action> = (
  state: StateType,
  action: Action,
): StateType => {
  switch (action.type) {
    case ActionTypes.SET_OUR_NAME:
      return {
        ...state,
        ourName: action.payload,
      };
    default:
      return state;
  }
};
