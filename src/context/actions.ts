import { ActionTypes } from 'src/utils/enums';
import { MessageLogin, MessageTyping, MessageStopTyping, NewMessage, UserJoin, UserLeft } from 'src/types';

type SetOurName = string;

interface SetOurNameActionType {
  type: ActionTypes.SET_OUR_NAME;
  payload: SetOurName;
}

interface SetFirstMessage {
  type: ActionTypes.SET_FIRST_MESSAGE;
  payload: MessageLogin;
}

interface SetNewMessage {
  type: ActionTypes.SET_NEW_MESSAGE;
  payload: NewMessage;
}

interface SetTyping {
  type: ActionTypes.SET_TYPING;
  payload: MessageTyping;
}

interface SetStopTyping {
  type: ActionTypes.SET_STOP_TYPING;
  payload: MessageStopTyping;
}

interface SetUserJoin {
  type: ActionTypes.SET_USER_JOIN;
  payload: UserJoin;
}

interface SetUserLeft {
  type: ActionTypes.SET_USER_LEFT;
  payload: UserLeft;
}

interface SetInitialData {
  type: ActionTypes.SET_CLEAR_DATA;
}

export const setOurName = (payload: SetOurName): SetOurNameActionType => ({
  type: ActionTypes.SET_OUR_NAME,
  payload,
});

export const setNewMessage = (payload: NewMessage): SetNewMessage => ({
  type: ActionTypes.SET_NEW_MESSAGE,
  payload,
});

export const setFirstMessage = (payload: MessageLogin): SetFirstMessage => ({
  type: ActionTypes.SET_FIRST_MESSAGE,
  payload,
});

export const setTyping = (payload: MessageTyping): SetTyping => ({
  type: ActionTypes.SET_TYPING,
  payload,
});

export const setStopTyping = (payload: MessageStopTyping): SetStopTyping => ({
  type: ActionTypes.SET_STOP_TYPING,
  payload,
});

export const setUserJoin = (payload: UserJoin): SetUserJoin => ({
  type: ActionTypes.SET_USER_JOIN,
  payload,
});

export const setUserLeft = (payload: UserLeft): SetUserLeft => ({
  type: ActionTypes.SET_USER_LEFT,
  payload,
});

export const clearData = (): SetInitialData => ({
  type: ActionTypes.SET_CLEAR_DATA,
});

export type Action =
  | SetOurNameActionType
  | SetNewMessage
  | SetFirstMessage
  | SetTyping
  | SetStopTyping
  | SetUserLeft
  | SetUserJoin
  | SetInitialData;

export type ReturnedTypes = ReturnType<
  | typeof setOurName
  | typeof setNewMessage
  | typeof setFirstMessage
  | typeof setTyping
  | typeof setStopTyping
  | typeof setUserJoin
  | typeof setUserLeft
  | typeof clearData
>;

export type PayloadType =
  | SetOurName
  | MessageLogin
  | MessageTyping
  | MessageStopTyping
  | NewMessage
  | UserJoin
  | UserLeft;
