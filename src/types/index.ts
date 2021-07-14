import { ActionTypes } from 'src/utils/enums';

export interface StateType {
  ourName: string;
  messages: Array<UpdatedLoginMessage | NewMessage | UserLeft | UserJoin>;
  loginStatus: boolean;
  typing: Array<MessageTyping>;
}

export type MessageLogin = [ActionTypes.SET_FIRST_MESSAGE, UserLeftOrJoinedType];
export type MessageTyping = [ActionTypes.SET_TYPING, MessageBaseObject];
export type MessageStopTyping = [ActionTypes.SET_STOP_TYPING, MessageBaseObject];
export type NewMessage = [ActionTypes.SET_NEW_MESSAGE, NewMessageType];
export type UserLeft = [ActionTypes.SET_USER_LEFT, UserLeftOrJoinedType];
export type UserJoin = [ActionTypes.SET_USER_JOIN, UserLeftOrJoinedType];
type UpdatedLoginMessage = [ActionTypes.SET_FIRST_MESSAGE, UpdatedLoginInfo]

interface MessageBaseObject {
  username: string;
}

interface NewMessageType extends MessageBaseObject {
  message: string;
}

interface UserLeftOrJoinedType extends MessageBaseObject {
  numUsers: number;
}

interface UpdatedLoginInfo extends UserLeftOrJoinedType {
  message: string;
}

export interface SocketStoreType {
  socket: WebSocket | null;
  connection: boolean;
  firstMessage: boolean;
}

export interface actionsForDispatchTypes {
  [key: string]: string;
}
