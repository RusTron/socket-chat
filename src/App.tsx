import { Route, Switch } from 'react-router-dom';
import { Login } from './pages/Login';
import { Chat } from './pages/Chat'
import { Layout } from './components/Layout';
import { Header } from './components/Header';

function App() {
  return (
    <Layout>
      <Layout.Header>
        <Header></Header>
      </Layout.Header>
      <Layout.Content>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path="/:name" component={Chat} />
        </Switch>
      </Layout.Content>
    </Layout>
  );
}

export default App;
