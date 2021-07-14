import { actionsForDispatchTypes } from 'src/types';

export const firstMessage = 'Welcome to Socket.IO Chat';

export const actionsForDispatch: actionsForDispatchTypes = {
  new_message: 'new message',
  login: 'login',
  typing: 'typing',
  stop_typing: 'stop typing',
  user_left: 'user left',
  user_joined: 'user joined',
};
