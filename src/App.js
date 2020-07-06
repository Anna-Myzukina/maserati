import React from 'react';
import './App.css';
import Home from './pages/Home';
import Cars from './pages/Cars';
import SingleCar from './pages/SingleCar';

import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
  <>
   <Navbar />
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/cars/" component={Cars}/>
    <Route exact path="/cars/:car_constructor" component={SingleCar}/>
    <Route component={Error} />
    </Switch>
  </>
  )

}

export default App;
