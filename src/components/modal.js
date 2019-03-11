import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Brands from "./brands";



class Modal extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'tim@tim.com',
      password:'asdf',
      show: false,
      redirect: false
    }
  }

  // const location = history.location;
  // const unlisten = history.listen((location, action) => {
  //   // location is an object like window.location
  //   console.log(action, location.pathname, location.state);
  // });
  
  savePassword( event ) {
    this.setState({
        password: event.target.value
    });
  }

  saveEmail( event ) {
    this.setState({
        email: event.target.value
    });
  }

  savePasswordConfirmation( event ) {
    this.setState({
        email_confirmation: event.target.value
    });
  }

  handleFormSubmit( event ) {
    let data = {
      email: "coke@tim.com",
      password: "asdf"
    }
    var headers = {
      Accept: 'application/json',
      "Content-Type": "application/json"
   }
    event.preventDefault();
    fetch('http://localhost:3000/brands/login', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.alert = "sucessful login") {
        this.setState({
          redirect: true,
          brand_name: data.brand_name,
          coupons: data.coupons,
          brand_id: data.session_id,
          brand_email: data.email,
          password_hash: data.hash
         })
      console.log(this.state)

      }
    } )
    .catch(error => {
      this.setState({      
        email:'tim@tim.com',
        password:'asdf',
        show: false,
        redirect: false})
      console.log(error)})
 

  }
  render(){
    if (!this.props.show) {
      return null;
    }
    const { redirect } = this.state;
    if (redirect) {
      console.log("heyheyhey")
      return <Redirect to='/brands' />;
    }
    return (
      <div>
        <form onSubmit={ this.handleFormSubmit.bind( this ) }>
          <h3>Please sign in</h3>
          <input type="email" 
          placeholder="Type email" 
          value={ this.state.email } 
          onChange={ this.saveEmail.bind( this ) }/>
          <input type="password" 
          placeholder="Type password" 
          value={ this.state.password } 
          onChange={ this.savePassword.bind( this ) }/>
          
          <button type="submit"> Submit </button>
        </form>
        <form onSubmit={ this.handleFormSubmit.bind( this ) }>
          <h3>Please sign up </h3>
          <input type="email" 
          placeholder="Type email" 
          value={ this.state.email } 
          onChange={ this.saveEmail.bind( this ) }/>
          <input type="password" 
          placeholder="Type password" 
          value={ this.state.password } 
          onChange={ this.savePassword.bind( this ) }/>
          <input type="password_confirmation" 
          placeholder="Type password confirmation" 
          value={ this.state.password } 
          onChange={ this.savePasswordConfirmation.bind( this ) }/>
          
          <button type="submit"> Submit </button>
        </form>
      </div>
    )
  }
}


export default Modal;