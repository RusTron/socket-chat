import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { socket } from '../../socket';

const Chat = () => {
  const conc = (text: any) => {
    console.log(text);
  };

  const sendDefaultMessage = () => {
    socket.send('2');
  };

  useEffect(() => {
    socket.onopen = () => {
      conc('connected');
    };

    socket.onclose = () => {
      conc('closed');
    };

    setTimeout(sendDefaultMessage, 20000);
  }, []);

  const handleSocketMessage = (e: any) => {
    console.log(e);
  };

  socket.onmessage = (e) => {
    handleSocketMessage(e);
  };

  return (
    <div>Hello World</div>
  );
};

export default withRouter(Chat);
