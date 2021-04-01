import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Not_Found from './Pages/404';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/404" component={Not_Found} />

        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
