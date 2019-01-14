import React, { Component } from 'react';
import ListComponent from "./components/listComponent"
import Add from "./components/adding"
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Menu from "./components/MenuComponent";
class App extends Component {
  render() {
    return (
      <div className="App">
          <Menu />
          <ListComponent />
          <Add />

      </div>
    );
  }
}

export default App;
