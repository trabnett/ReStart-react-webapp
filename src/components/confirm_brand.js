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


class ConfirmBrand extends Component{
    constructor(props) {
        super(props);
				this.state={
                    redirect_user: false,
                    redirect_brand: false,
                    user: {
                        first_name: "",
                        last_name: "",
                        email: " ",
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
    handleNameChange = (e) => {
        e.preventDefault()
        let brand = {...this.state.brand}
        brand.brand_name = e.target.value;
        this.setState({brand}, () => {
            console.log(this.state.brand)
        })
    }
    handleEmailChange = (e) => {
        e.preventDefault()
        let brand = {...this.state.brand}
        brand.brand_email = e.target.value
        this.setState({brand}, () => {
            console.log(this.state.brand)
        })
    }
    handleLogoChange = (e) => {
        e.preventDefault()
        let brand = {...this.state.brand}
        brand.brand_logo = e.target.value;
        this.setState({brand}, () => {
            console.log(this.state.brand)
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("yep")
        let data = {}
        let url = ""
        if (this.state.user === null){
          url = 'https://restart-recycling.herokuapp.com/brands'
          data = {
            brand_name: this.state.brand.brand_name,
            brand_id: this.state.brand.brand_id,
            brand_logo: this.state.brand.brand_logo,
            brand_email: this.state.brand.brand_email
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
          console.log(data)
        if (this.state.brand){
          store.dispatch( login({
            brand_email: data.email,
            brand_id: data.id,
            brand_logo: data.logo,
            brand_name: data.name
          }))
          this.setState({redirect_brand: true})
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
        if (this.state.redirect_brand){
            return(
                <Redirect to="/brands"/>
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
                    <h1 className="confirm_form">Hello {this.state.brand.brand_name}. Welcom to ReStart</h1>
                    <div className="confirm_form">
                        <form className='react-form' onSubmit={this.handleSubmit}>
                            <h3>Please enter your data to create your account</h3>
                            <input className="datepicker" name='brand_name' type='text' placeholder="Brand Name" required onChange={this.handleNameChange} value={this.state.brand.brand_name} />
                            <br></br>
                            <h2>Please take a minute to enter a web address of your company's logo:</h2>
                            <input className="datepicker" name='logo' type='text' placeholder="Logo URL" required onChange={this.handleLogoChange} value={this.state.brand.logo} />
                            <br></br>
                            <input className="datepicker" name='email' type='text' placeholder={this.state.brand.brand_email} onChange={this.handleEmailChange} value={this.state.brand.brand_email} />
                            <br></br>
                            <input class="btn2 btn2--green btn2--animated buttonsize" type='submit' placeholder='Send message' />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConfirmBrand;