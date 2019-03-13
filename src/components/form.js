/* this is the form component to make new coupons*/
import React, { Component } from "react";
import DropdownDate from 'react-dropdown-date';
//import DatePicker from 'react-bootstrap-date-picker';
import './../styles/brand.css';


class ReactFormLabel extends React.Component {
  constructor(props) {
   super(props)
  }
 
  render() {
   return(
    <label htmlFor={this.props.htmlFor}>{this.props.title}</label>
   )
  }
 }
 
 class Form extends React.Component {
  constructor(props) {
   super(props)
 
   this.state = {
    expiry_date: null,
    coupon_value: ''
   }
 
  }
 
  handleCouponValueChange = (e) => {
    this.setState({coupon_value: e.target.value})
  }
 
 
  handleSubmit = (e, message) => {
   e.preventDefault()
    this.setState({brand_name: this.props.brand_name}, ()=> {
   console.log(this.state)
   let data = {
    email: this.state.email,
    password: this.state.password
  }
  console.log('hello')
  var headers = {
    Accept: 'application/json',
    "Content-Type": "application/json"
 }
})


  }
 
  render() {
   return(
    <form className='react-form' onSubmit={this.handleSubmit}>
		<h2>Create a New Coupon</h2>
     <h3>Please enter an expiry date and value for your new coupon</h3>
		 <br></br>
		 <br></br>
		 <h4>Start Date:</h4>
     <input className="datepicker" type="date" id="start" name="trip-start"
       value="2019-03-14"
       ></input>
		<br></br>
		<br></br>
		<h4>Expiry Date:</h4>
		<input className="datepicker" type="date" id="start" name="trip-start"
					value="2020-07-22"
					max="2025-12-31"></input>
    <br></br>
		<br></br>
		<h4>Value/Amount (in dollars):</h4>
 
      <input className="datepicker" name='coupon_value' type='number' required onChange={this.handleCouponValueChange} value={this.state.coupon_value} />
		
		<br></br>
		<br></br>
 
      <input class="btn2 btn2--green btn2--animated buttonsize" type='submit' placeholder='Send message' />

		 {/* <FormGroup>
		<ControlLabel>Label</ControlLabel>
		<DatePicker id="example-datepicker" value={this.state.value} onChange={this.handleChange} />
		<HelpBlock>Help</HelpBlock>
	</FormGroup>; */}
    </form>
   )
  }
 }

  export default Form;