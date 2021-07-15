import React, { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Toastify: FC = () => (
  <ToastContainer
    className="toast-container"
    toastClassName="toast-wrapper"
    bodyClassName="toast-body"
    progressClassName="progress"
    autoClose={5000}
    pauseOnFocusLoss={false}
  />
);
