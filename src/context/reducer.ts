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
    case ActionTypes.SET_NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case ActionTypes.SET_FIRST_MESSAGE:
      return {
        ...state,
        messages: [action.payload],
      };
    default:
      return state;
  }
};
