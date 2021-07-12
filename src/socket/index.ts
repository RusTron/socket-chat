import { SocketStoreType } from '../types';

export const socketStore: SocketStoreType = {
  socket: null,
};

export const createSocket = () => {
  socketStore.socket = new WebSocket(
    'wss://socketio-chat-h9jt.herokuapp.com/socket.io/?EIO=3&transport=websocket',
  );
};
