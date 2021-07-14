import { ActionTypes } from 'src/utils/enums';

export interface StateType {
  ourName: string;
  messages: Array<MessageType>;
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

interface NewMessageTypeForStore extends MessageBaseObject{
  message: string;
}

export interface NewMessageType extends NewMessageTypeForStore {
  time: string;
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
  typing: boolean;
}

export interface actionsForDispatchTypes {
  [key: string]: string;
}

export type MessageType = UpdatedLoginMessage | NewMessage | UserLeft | UserJoin;

export type NotificationType = UpdatedLoginMessage | UserLeft | UserJoin;
