import React from 'react';
import { Provider } from 'react-redux';

//pages
import { MainPage } from './pages/MainPage';
//store
import { store } from './store/index';

function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
