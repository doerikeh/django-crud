import React, { Component } from "react";
import { render } from "react-dom";
import Header from "../components/layout/header/Header";
import Body from './body/Body';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
import Dashboard from './todos/Dashboard';
import TodoDelete from './todos/TodoDelete';
import TodoEdit from './todos/TodoEdit';

import RegisterForm from './auth/RegisterForm';
import LoginForm from './auth/LoginForm';
import PrivateRoute from './common/PrivateRoute';

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <div>
        <Provider store={store}>
        <Router history={history}>
          <Header />
          <Switch>
            <PrivateRoute exact path='/' component={Dashboard} />
            <Route exact path='/delete/:id' component={TodoDelete} />
            <Route exact path='/edit/:id' component={TodoEdit} />
            <Route exact path='/register' component={RegisterForm} />
            <Route exact path='/login' component={LoginForm} />
          </Switch>
          <Body/>
        </Router>
      </Provider>
      </div>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);