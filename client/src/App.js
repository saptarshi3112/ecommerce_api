import { Auth } from "./components/Auth";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import { Home } from './components/Home';
import { PrivateRoute } from "./components/PrivateRoute";


export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <Route path='/auth' component={Auth} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </>
  );
};
