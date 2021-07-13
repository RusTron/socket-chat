export interface StateType {
  ourName: string,
  messages: Array<object>,
  notifications: Array<object>,
  loginStatus: boolean,
  typing: object | null,
}

export interface SocketStoreType {
  socket: WebSocket | null;
  connection: boolean;
  firstMessage: boolean;
}
