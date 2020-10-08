import React from 'react';
import Pokedex from './components/Pokedex';
import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <div>
        <Pokedex/>
      </div>
    </div>
    </Provider>    
  );
}

export default App;
