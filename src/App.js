import { Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Cities from './pages/cities';
import './App.css';

function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route path="/" component={Cities} exact />
      </Switch>
    </main>
  );
}

export default App;
