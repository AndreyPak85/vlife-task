import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
//pages
import { MainPage } from './pages/MainPage';
import { Routes } from './routes/Routes';
//store
import { store } from './store/index';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
