import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppContextProvider } from './context';
import Login from './pages/Login';
import Chat from './pages/Chat';
import { Layout } from './components/Layout';
import { Header } from './components/Header';

function App() {
  return (
    <Layout>
      <AppContextProvider>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.Content>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/:ourName" component={Chat} />
          </Switch>
        </Layout.Content>
      </AppContextProvider>
    </Layout>
  );
}

export default App;
