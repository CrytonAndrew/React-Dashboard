import './App.css';
import Navigation from './components/Navigation/Navigation';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import routes from './routes';

import { useStyles } from './components/Styles';

function App() {
  const classes = useStyles()

  return (
    <div className={classes.appRoot}>
      <Router>
        <Navigation />
        <div>
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route key={index} path={route.path} exact>
                  {route.component}
                </Route>
              )
            })}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
