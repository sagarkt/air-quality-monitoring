import { Route, Switch } from 'react-router-dom';
import Cities from './pages/cities/index';
import './App.css';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Cities} exact />
      </Switch>
    </main>
  );
}

export default App;
