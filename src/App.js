import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Content from './components/Content/Content';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Content}/>
        </Switch>
    </Router>
  );
}

export default App;
