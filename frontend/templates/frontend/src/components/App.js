import React, { Component } from "react";
import { render } from "react-dom";
import Header from "./header/Header";
import Body from './body/Body';

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <Body/>
      </div>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);