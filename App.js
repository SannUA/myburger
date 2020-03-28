import React from 'react';

import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
      <BurgerBuilder />
      </Layout>
      <Checkout />
    </div>
  );
}

export default App;
