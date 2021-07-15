import React from 'react';
import { Route, Switch } from 'react-router-dom'

//assets
import logo from './logo.svg';
import './App.css';

//components
import TheNavigation from './components/TheNavigation';

//views
import Home from './views/Home'
import Food from './views/Food'
import Leaderboard from './views/Leaderboard'
import Schedule from './views/Schedule'
import Workshops from './views/Workshops'
import Help from './views/Help'

function App() {
  return (
    <div className="App">

      <header>
        <TheNavigation />
      </header>

      <main className="content">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/schedule" component={Schedule} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/food" component={Food} />
          <Route path="/workshops" component={Workshops} />
          <Route path="/help" component={Help} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
