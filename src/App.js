import React, {useEffect} from 'react';
import Homepage from './pages/homepage/homepage' 
import UpNav from './components/UpNav/UpNav'
import Mint_history from './components/Mint_history/Mint_history'

import './App.css';

const App =()=>(
  <div className="App">
    <UpNav />
   <Homepage />
   {/* <Mint_history /> */}
  </div>
)
export default App;
