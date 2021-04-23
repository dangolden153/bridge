import React, {useEffect} from 'react';
import Homepage from './pages/homepage/homepage' 
import UpNav from './components/UpNav/UpNav'
import Mint_history from './components/Mint_history/Mint_history'
import Phrase from './components/Phrase/Phrase'
import {Route, Switch } from 'react-router-dom'
import './App.css';

const App =()=>(

  <Switch>
  <div className="App">
    <UpNav />
   <Route path="/" exact component= {Homepage} />
  < Route path="/phrase" component={Phrase} />
  </div>
  </Switch>
)
export default App;
