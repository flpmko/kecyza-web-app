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
        </Switch>
      </main>
    </div>
  );
}

export default App;
