import React from 'react';
import Main from './views/Main'
import Detail from './views/Detail'
import { Router } from '@reach/router'

import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
            <Main path="/"/>
            <Detail path="/product/:id"/>
        </Router>
    </div>
  );
}

export default App;
