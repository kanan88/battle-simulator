import React from 'react';
import SimulatorState from "./context/simulator/simulator.state";

import Header from "./components/header/header.component";
import Hero from "./components/hero/hero.component";
import Villain from "./components/villain/villain.component";
import Battle from "./components/battle/battle.component";

import './App.scss';

const App = () => {
  return (
      <SimulatorState>
        <div className="container">
            <Header />

            <div className="main">
                <Hero />
                <Battle />
                <Villain />
            </div>
        </div>
      </SimulatorState>
  );
}

export default App;
