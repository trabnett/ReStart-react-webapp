import React, { Component } from "react";
import Popup from 'reactjs-popup';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history';
import './../styles/modal.css';
import Brands from "./brands";
import Users from "./users";
import Confirm from "./confirm";
import ConfirmBrand from "./confirm_brand";
import { LOGIN } from "../redux/constants";
// you must require the store on any page that gets it's state from redux
import store from '../redux/store';
// 'login' is a function that triggers a redux action. you must import any actions if you want use them
import { login } from "../redux/actions";
import { bindActionCreators } from "redux";




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
      brand: "User",
      counter: 0

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
    let url = ""
    if (this.state.user === "Brand"){
      url = 'https://restart-recycling.herokuapp.com/brands'
    } else {
      url = 'https://restart-recycling.herokuapp.com/users'
    }
    let data = {
      email: this.state.signup_email,
      password: this.state.signup_password,
      password_confirmation: this.state.password_confirmation
    }
    var headers = {
      Accept: 'application/json',
      "Content-Type": "application/json"
   }
   fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    if (this.state.user === "Brand" && data.alert === "brand created"){
      store.dispatch( login({
        brand_email: data.brand.email,
        brand_id: data.brand.id,
        brand_logo: "placeholder"
      }))
      this.setState({register_brand: true})
    } else if (this.state.user === "User" && data.alert === "user created") {
      console.log(data.email)
      store.dispatch( login({
        email: data.user.email,
        session_id: data.user.id
      }))
      this.setState({register_user: true})
    } else if (data.exception === "#<ActiveRecord::RecordInvalid: Validation failed: Email has already been taken>"){
      alert("That email is already taken")
      this.setState({
        email:'',
        password:'',
        signup_email: '',
        signup_password: '',
        password_confirmation: ''
      }, () => {
        let refresh = this.state.counter + 1
        this.setState({counter: refresh})})
    } else {
      alert("Please make sure all fields are filled out")
    }
  })

  }

  handleFormSubmit( event ) {
    event.preventDefault();
    let url = ""
    if (this.state.user === "Brand") {
      url = 'https://restart-recycling.herokuapp.com/brands/login'
    } else {
      url = "https://restart-recycling.herokuapp.com/login"
    }
    let data = {
      email: this.state.email,
      password: this.state.password
    }
    var headers = {
      Accept: 'application/json',
      "Content-Type": "application/json"
   }
    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.alert === "sucessful login" && this.state.user === "Brand") {
        // store.dispatch is a redux command. it takes a function (in this case 'login'). You can see what this funciton is doing in '../redux/reducers'
        store.dispatch( login({
          brand_name: data.brand_name,
          coupons: data.coupons,
          brand_id: data.session_id,
          brand_email: data.email,
          brand_logo: data.brand_logo
        }) )
        this.setState({
          redirect: true,
         })
      } else if (data.alert === "sucessful login" && this.state.user === "User"){
        console.log(data)
        store.dispatch( login({
          first_name: data.first_name,
          last_name: data.last_name,
          coupons: data.coupons,
          email: data.email,
          postcode: data.postcode,
          points: data.points,
          session_id: data.session_id
        }) )
        this.setState({redirect: true})
      } else {
        alert("Please register or login with one of our preregistered brands:\nemail: starbucks@starbucks.com password: asdf\nemail: dasani@dasani.com password: asdf\nemail: coke@coke.com password: asdf\nemail: drpepper@drpepper.com password: asdf\nemail: chiquita@chipuita.com password: asdf\nemail: nestle@nestle.com password: asdf\nemail: lighthouselabs@lighthouselabs.com password: asdf\nemail: duracell@duracell.com password: asdf")
        this.setState({
          email:'',
          password:'',
          signup_email: '',
          signup_password: '',
          password_confirmation: ''
        }, () => {
          let refresh = this.state.counter + 1
          this.setState({counter: refresh})})
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
    if (this.state.register_brand){
      console.log("here")
      return <Redirect to="./confirm_brand" />
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
            <div className="popupname"> Log In or Sign Up as a {this.state.user} or click here to continue as a  <button className="btn2 btn2--green btn2--animated" onClick={this.toggleUser}>{this.state.brand}</button></div>
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
              <input type="password" 
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