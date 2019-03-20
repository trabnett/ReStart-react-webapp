import React, { Component } from "react";
import Popup from 'reactjs-popup';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history';
import './../styles/modal.css';
import Brands from "./brands";
import Users from "./users";
import Confirm from "./confirm"
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";




class Modal extends Component {
  constructor(props){
    super(props);
    this.state={

      email:'',
			password:'',
			signup_email:'',
			signup_password:'',
			password_confirmation:'',
      redirect: false,
      register_brand: false,
      register_user: false,
      user: "Brand",
      brand: "User"

    }

  }
  
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
	saveSignupPassword( event ) {
    this.setState({
       signup_password: event.target.value
    });
  }


  saveSignupEmail( event ) {
    this.setState({
        signup_email: event.target.value
    });
  }

  savePasswordConfirmation( event ) {
    this.setState({
        password_confirmation: event.target.value
    });
  }

  toggleUser = () => {
    if (this.state.user === "Brand"){
      this.setState({user: "User", brand: "Brand"})
    } else if (this.state.user === "User"){
      this.setState({user: "Brand", brand: "User"})
    }

  }
  handleRegistration = (event) => {
    event.preventDefault();
    this.setState({register_user: true})
  }

  handleFormSubmit( event ) {
    let url = ""
    if (this.state.user === "Brand") {
      url = 'http://localhost:3000/brands/login'
    } else {
      url = "http://localhost:3000/login"
    }
    let data = {
      email: this.state.email,
      password: this.state.password
    }
    var headers = {
      Accept: 'application/json',
      "Content-Type": "application/json"
   }
    event.preventDefault();
    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.alert == "sucessful login") {
        console.log(data, "<=======")
        this.setState({
          redirect: true,
          brand_name: data.brand_name,
          coupons: data.coupons,
          brand_id: data.session_id,
          brand_email: data.email,
          brand_logo: data.brand_logo
         })
      } else {
        alert("Hello\nFor today's demonstration, please login with one of our preregistered brands:\nemail: starbucks@starbucks.com password: asdf\nemail: dasani@dasani.com password: asdf\nemail: coke@coke.com password: asdf\nemail: drpepper@drpepper.com password: asdf\nemail: chiquita@chipuita.com password: asdf\nemail: nestle@nestle.com password: asdf\nemail: lighthouselabs@lighthouselabs.com password: asdf\nemail: duracell@duracell.com password: asdf")
      }
    } )
  }

  render(){
    if (this.state.register_user) {
      return <Redirect to={{
        pathname: '/confirm',
        state: { 
          brand_name: this.state.brand_name, 
          logo: this.state.brand_logo,
          email: this.state.brand_email
        }
      }}/>;
    }
    const { redirect } = this.state;
    if (redirect && this.state.user === "Brand") {
      return <Redirect to={{
        pathname: '/brands',
        state: { 
          brand_name: this.state.brand_name, 
          logo: this.state.brand_logo,
          email: this.state.brand_email
        }
      }}/>;
    } else if (redirect && this.state.user === "User") {
      return <Redirect to={{
        pathname: '/users',
        state: { 
          email: this.state.email
        }
      }}/>
    }
    return (
      <Popup trigger={<button className="btn btn--red btn--animated"> Login / Sign Up</button>} modal>
        {close => (
          <div className="modal">
            <a className="close" onClick={close}>
              &times;
            </a>
            <div className="popupname"> Log In or Sign Up as a {this.state.user} or click here as a  <button onClick={this.toggleUser}>{this.state.brand}</button></div>
            <div className="content">
              {' '}
              ReStart offers rewards for recycling with the help of cities, brands and public we can all be planet heros.
            </div>
            <div>
            <form onSubmit={ this.handleFormSubmit.bind( this ) }>
              <h3>Please sign in as a {this.state.user}</h3>
              <input type="email" 
              placeholder={this.state.user + " email"}
              value={ this.state.email } 
              onChange={ this.saveEmail.bind( this ) }/>
              <input type="password" 
              placeholder={this.state.user + " password"} 
              value={ this.state.password } 
              onChange={ this.savePassword.bind( this ) }/>
              
              <button className="btn2 btn2--green btn2--animated" type="submit"> Submit </button>
            </form>
						<a> Forgot Password </a>
						<br></br>
						<br></br>
            <form onSubmit={ this.handleRegistration }>
				
              <h3>Or, if you are not already signed up, please sign up as a {this.state.user}</h3>
              <input type="email" 
              placeholder={this.state.user + " email"}
              value={ this.state.signup_email } 
              onChange={ this.saveSignupEmail.bind( this ) }/>
              <input type="password" 
              placeholder={this.state.user + " password"}

              value={ this.state.signup_password } 
              onChange={ this.saveSignupPassword.bind( this ) }/>
              <input type="password_confirmation" 
              placeholder={this.state.user + " password confirmation"} 
              value={ this.state.password_confirmation } 
              onChange={ this.savePasswordConfirmation.bind( this ) }/>
              
              <button className="btn2 btn2--green btn2--animated" type="submit"> Submit </button>
            </form>
          </div>
            <div>
              <a> Looking to join or partner </a>	
							<br></br>
							<br></br>
            </div>
          </div>
        )}
      </Popup>
        )}
    }
    


export default Modal;