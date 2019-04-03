import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Coupon from "./coupon"
import Form from "./form"
import { LOGIN } from "constants";
import './../styles/brand.css';
import Graph from "./usagegraph";
import white_logo_restart from "./../images/white_logo_restart.png";
import store from '../redux/store';
import { login } from "../redux/actions";


class Confirm extends Component{
    constructor(props) {
        super(props);
				this.state={
                    redirect_user: false,
                    redirect_brand: false,
                    user: {
                        first_name: "",
                        last_name: "",
                        email: "",
                        postcode: "",
                        points: 0,
                        coupons: [],
                        session_id: 0
                    },
                    brand: {
                        brand_name: "",
                        brand_id: null,
                        brand_logo: "",
                        brand_email: "",
                        coupons: [],
                      }
                  };
    }

    LogOut = () => {
        let path = `/`;
        this.props.history.push(path);
    }
    handleFirstNameChange = (e) => {
        e.preventDefault()
        let user = {...this.state.user}
        user.first_name = e.target.value;
        this.setState({user}, () => {
            console.log(this.state)
        })
    }
    handleLastNameChange = (e) => {
        e.preventDefault()
        let user = {...this.state.user}
        user.last_name = e.target.value;
        this.setState({user}, () => {
            console.log(this.state.user)
        })
    }
    handleEmailChange = (e) => {
        e.preventDefault()
        let user = {...this.state.user}
        user.email = e.target.value
        this.setState({user}, () => {
            console.log(this.state.user)
        })
    }
    handlePostcodeChange = (e) => {
        e.preventDefault()
        let user = {...this.state.user}
        user.postcode = e.target.value;
        this.setState({user}, () => {
            console.log(this.state.user)
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("yep")
        let data = {}
        let url = ""
        if (this.state.brand === null){
          url = `https://restart-recycling.herokuapp.com/users/${this.state.user.session_id}`
          data = {
            email: this.state.user.email,
            first_name: this.state.user.first_name,
            last_name: this.state.user.last_name,
            postcode: this.state.user.postcode
          }
        } else {
          url = 'https://restart-recycling.herokuapp.com/users'
          data = {
            brand_name: "",
            brand_id: null,
            brand_logo: "",
            brand_email: "",
            coupons: [],
            }
        }
        var headers = {
          Accept: 'application/json',
          "Content-Type": "application/json",
       }
       fetch(url, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        if (this.state.brand){
          store.dispatch( login({
            brand_email: data.brand.email,
            brand_id: data.brand.id,
            brand_logo: "placeholder"
          }))
          this.setState({register_user: true})
        } else if (this.state.user) {
          console.log(data,"this is data right before I set it")
          store.dispatch( login({
            email: data.email,
            first_name: data.first_name,
            last_name: data.last_name,
            postcode: data.postcode,
            points: data.points,
            session_id: data.id
          }))
          this.setState({redirect_user: true})
        } else if (data.exception === "#<ActiveRecord::RecordInvalid: Validation failed: Email has already been taken>"){
          alert("That email is already taken")
        } else {
          alert("Please make sure all fields are filled out")
        }
      })
      .catch((err) => {
        console.error('err', err);
    });
    }
    componentDidMount(){
        this.setState({...store.getState()})
    }
    render(){
        if (this.state.redirect_user){
            return(
                <Redirect to="/users"/>
            )
        }
        return(
            <div>
                <div className="brandheader">
                    <picture>
                        <source srcSet={white_logo_restart}></source>
                        <img alt="Full logo" src="images/white_logo_restart.png" className="restartResize"></img>
                    </picture>   
                    <h1>Welcome to ReStart</h1>
                    <button className="btn2 logout" onClick={this.LogOut}>Log out</button>
                </div>
                <div className="brandcolumn">
                    <h1 className="confirm_form">Hello {this.state.user.first_name}. Welcom to ReStart</h1>
                    <div className="confirm_form">
                        <form className='react-form' onSubmit={this.handleSubmit}>
                            <h3>Please enter your data to create your account</h3>
                            <input className="datepicker" name='first_name' type='text' placeholder="First Name" required onChange={this.handleFirstNameChange} value={this.state.user.first_name} />
                            <br></br>
                            <input className="datepicker" name='last_name' type='text' placeholder="Last Name" required onChange={this.handleLastNameChange} value={this.state.user.last_name} />
                            <br></br>
                            <input className="datepicker" name='email' type='text' placeholder={this.state.user.email} onChange={this.handleEmailChange} value={this.state.user.email} />
                            <br></br>
                            <input className="datepicker" name='postcode' type='text' required placeholder="Postal Code" onChange={this.handlePostcodeChange} value={this.state.user.postcode} />
                            <br></br>
                            <input class="btn2 btn2--green btn2--animated buttonsize" type='submit' placeholder='Send message' />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Confirm;