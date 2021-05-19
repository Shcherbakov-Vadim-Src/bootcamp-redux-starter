import React, { Component } from "react";
import "./styles.css";
import { Provider } from 'react-redux';
import store from './redux/store';

import Header from './components/Header';
import Goods from './components/Goods';
import Cart from './components/Cart';

class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <div className="app">
          <header className="app__header">
            <Header />
          </header>
          <main class="app__main">
            <div class="app__goods">
              <Goods />
            </div>
            <div class="app__cart">
              <Cart />
            </div>
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
