export enum HeadingType {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  p = 'p'
}

export enum Log {
  in = 'Log in',
  out = 'Log out'
}

export enum Typing {
  stop = 'stop typing',
  start = 'typing'
}

export enum SocketActions {
  ping = '2',
  pong = '3',
  connectionOpened = '5',
  message = '42',
}

export enum ActionTypes {
  SET_OUR_NAME,
  SET_CLEAR_DATA,
  SET_NEW_MESSAGE = 'new message',
  SET_FIRST_MESSAGE = 'login',
  SET_TYPING = 'typing',
  SET_STOP_TYPING = 'stop typing',
  SET_USER_LEFT = 'user left',
  SET_USER_JOIN = 'user joined',
 }

export enum ButtonType {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}

export enum FlexDirectionTypes {
  column = 'column',
  row = 'row',
}
