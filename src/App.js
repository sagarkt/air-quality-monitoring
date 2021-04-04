import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/index';
import './App.css';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </main>
  );
}

export default App;
