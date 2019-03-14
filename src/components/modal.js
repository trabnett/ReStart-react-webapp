import React, { Component } from "react";
import Popup from 'reactjs-popup';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history';
import './../styles/modal.css';
import Brands from "./brands";



class Modal extends Component {
  constructor(props){
    super(props);
    this.state={

      email:'',
			password:'',
			signup_email:'',
			signup_password:'',
			password_confirmation:'',
      redirect: false
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

  handleFormSubmit( event ) {
    let data = {
      email: this.state.email,
      password: this.state.password
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
      }
    } )
    // .catch(error => {
    //   this.setState({      
    //     email:'tim@tim.com',
    //     password:'asdf',
    //     show: false,
    //     redirect: false})
    //   console.log(error)})
 

  }

  render(){
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to={{
        pathname: '/brands',
        state: { 
          brand_name: this.state.brand_name, 
          logo: this.state.brand_logo,
          email: this.state.brand_email
        }
      }}/>;
    }
    return (
      <Popup trigger={<button className="btn btn--red btn--animated"> Login / Sign Up</button>} modal>
        {close => (
          <div className="modal">
            <a className="close" onClick={close}>
              &times;
            </a>
            <div className="popupname"> Log In or Sign Up </div>
            <div className="content">
              {' '}
              ReStart offers rewards for recycling with the help of cities, brands and public we can all be planet heros.
            </div>
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
              
              <button className="btn2 btn2--green btn2--animated" type="submit"> Submit </button>
            </form>
						<a> Forgot Password </a>
						<br></br>
						<br></br>
            <form onSubmit={ this.handleFormSubmit.bind( this ) }>
				
              <h3>Please sign up </h3>
              <input type="email" 
              placeholder="Type email" 
              value={ this.state.signup_email } 
              onChange={ this.saveSignupEmail.bind( this ) }/>
              <input type="password" 
              placeholder="Type password" 

              value={ this.state.signup_password } 
              onChange={ this.saveSignupPassword.bind( this ) }/>
              <input type="password_confirmation" 
              placeholder="Type password confirmation" 
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