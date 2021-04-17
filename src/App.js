import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Post from './Components/Post';
import User from './Components/User';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/post/:id' exact component={Post} />
        <Route path='/user/:id' exact component={User} />

        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
