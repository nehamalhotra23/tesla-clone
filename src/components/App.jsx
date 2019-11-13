import React from 'react';
import Home from './Home';
import Model3 from "./Model3";
import ModelX from "./ModelX";
import ModelS from "./ModelS";
import ModelY from "./ModelY";
import { Switch, Route } from 'react-router-dom';





function App(){
  return (
    <div>
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/model3" component={Model3} />
        <Route exact path="/modelX" component={ModelX} />
        <Route exact path="/modelS" component={ModelS} />
        <Route exact path="/modelY" component={ModelY} />
      </Switch>
      
      
    </div>
  );
}

export default App;