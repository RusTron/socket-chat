import { ActionTypes } from '../utils/enums';

type SetOurName = string;

interface SetOurNameActionType {
  type: ActionTypes.SET_OUR_NAME;
  payload: SetOurName;
}

export const setOurName = (payload: SetOurName) => ({
  type: ActionTypes.SET_OUR_NAME,
  payload,
});

export type Action =
  | SetOurNameActionType

export type ReturnedTypes = ReturnType<
  | typeof setOurName
>;

export type PayloadType =
  | SetOurName
