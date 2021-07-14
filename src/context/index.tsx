import React, {
  createContext, useReducer, Reducer, Dispatch,
} from 'react';
import { reducer } from './reducer';
import { ReturnedTypes } from './actions';
import { StateType } from '../types';

interface ContextType {
  state: StateType,
  dispatch: Dispatch<ReturnedTypes>,
}

export const initialState = {
  ourName: '',
  messages: [],
  notifications: [],
  loginStatus: false,
  typing: [],
};

export const AppContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});

export const AppContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<StateType, any>, StateType>(
    reducer,
    initialState,
    (updatedState: StateType): StateType => updatedState,
  );

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
