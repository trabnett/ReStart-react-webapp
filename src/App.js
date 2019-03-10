import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/home"
import Login from "./components/login"
import Logout from "./components/logout"
import Error from "./components/error"
import Modal from "./components/modal"
import Navigation from "./components/navigation"



class App extends Component {



  render() {
    return (

      <BrowserRouter>
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/login" component={Login}/>
              <Route path="/logout" component={Logout}/>
              <Route component={Error}/>
            </Switch>
      </BrowserRouter>

    );
  }
}

export default App;
