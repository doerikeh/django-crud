import React, { Component } from "react";
import { render } from "react-dom";
import Header from "./header/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("api/crud/")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  render() {
    return (
      <div>
        <Header/>
        <div>
        <ul className="mt-12">
          {this.state.data.map(crud => {
            return (
              <li key={crud.id}>
                {crud.title}
              </li>
            );
          })}
        </ul>
        </div>
      </div>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);