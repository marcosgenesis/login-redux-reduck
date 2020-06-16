import React,{useState} from 'react';
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import './config/reactotron'
import {store,persistor} from './store'
import './App.css';
import Login from './pages/login'
function App() {
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Login></Login>
      </PersistGate>
    </Provider>
  );
}

export default App;
