import { ActionTypes } from '../utils/enums';

type SetOurName = string;
type Messages = Array<object>

interface SetOurNameActionType {
  type: ActionTypes.SET_OUR_NAME;
  payload: SetOurName;
}

interface SetFirstMessage {
  type: ActionTypes.SET_FIRST_MESSAGE;
  payload: Messages;
}

interface SetNewMessage {
  type: ActionTypes.SET_NEW_MESSAGE
  payload: Messages
}

export const setOurName = (payload: SetOurName): SetOurNameActionType => ({
  type: ActionTypes.SET_OUR_NAME,
  payload,
});

export const setNewMessage = (payload: Messages): SetNewMessage => ({
  type: ActionTypes.SET_NEW_MESSAGE,
  payload,
});

export const setFirstMessage = (payload: Array<object>): SetFirstMessage => ({
  type: ActionTypes.SET_FIRST_MESSAGE,
  payload,
});

export type Action =
  | SetOurNameActionType
  | SetNewMessage
  | SetFirstMessage

export type ReturnedTypes = ReturnType<
  | typeof setOurName
  | typeof setNewMessage
  | typeof setFirstMessage
>;

export type PayloadType =
  | SetOurName
  | Messages
