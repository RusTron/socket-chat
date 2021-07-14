import { Reducer } from 'react';
import moment from 'moment';
import { StateType } from 'src/types';
import { ActionTypes } from 'src/utils/enums';
import { firstMessage } from 'src/utils/constants';
import { Action } from './actions';
import { initialState } from './index';

export const reducer: Reducer<StateType, Action> = (state: StateType = initialState, action: Action): StateType => {
  switch (action.type) {
    case ActionTypes.SET_OUR_NAME:
      return {
        ...state,
        ourName: action.payload,
      };
    case ActionTypes.SET_NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, [action.payload[0], { ...action.payload[1], time: moment().format('HH:mm') }]],
      };
    case ActionTypes.SET_FIRST_MESSAGE:
      return {
        ...state,
        messages: state.messages.length
          ? [...state.messages, [action.payload[0], { ...action.payload[1], message: firstMessage }]]
          : [[action.payload[0], { ...action.payload[1], message: firstMessage }]],
      };
    case ActionTypes.SET_TYPING:
      return {
        ...state,
        typing: state.typing.length
          ? [...state.typing.filter((user) => user[1].username !== action.payload[1].username), action.payload]
          : [action.payload],
      };
    case ActionTypes.SET_STOP_TYPING:
      return {
        ...state,
        typing: state.typing.length
          ? state.typing.filter((user) => user[1].username === action.payload[1].username)
          : [],
      };
    case ActionTypes.SET_USER_LEFT:
      return {
        ...state,
        typing: state.typing.length
          ? state.typing.filter((user) => user[1].username === action.payload[1].username)
          : [],
        messages: state.messages.length ? [...state.messages, action.payload] : [action.payload],
      };
    case ActionTypes.SET_USER_JOIN:
      return {
        ...state,
        messages: state.messages.length ? [...state.messages, action.payload] : [action.payload],
      };
    case ActionTypes.SET_CLEAR_DATA:
      return { ...initialState };
    default:
      return state;
  }
};
