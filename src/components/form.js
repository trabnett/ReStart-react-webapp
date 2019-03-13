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
		start_date: null,
    coupon_value: ''
   }
 
  }
	handleExpiryDateChange = (e) => {
		e.preventDefault()
		this.setState({expiry_date: e.target.value})
	}

	handleStartDateChange = (e) => {
		e.preventDefault()
		this.setState({start_date: e.target.value})
	}

  handleCouponValueChange = (e) => {
    this.setState({coupon_value: e.target.value})
  }
 
 
	handleSubmit = (e, message) => {
		e.preventDefault()
		 let code = Math.floor(Math.random()*90000) + 10000;
		 this.setState({
			 brand_name: this.props.brand_name,
			 code: code,
			 counter: 0
		 }, ()=> {
		let data = {...this.state}
	 console.log(data, "<==================")
	 var headers = {
		 Accept: 'application/json',
		 "Content-Type": "application/json"
	}
	fetch('http://172.46.1.207:3000/brands/coupons', {
			 method: 'POST',
			 headers: headers,
			 body: JSON.stringify(data)
		 })
		 .then(response => response.json())
		 .then(data => {


			this.props.AddNewCoupon(data.new_coupon)
			 console.log(data, "<=======")
			 this.setState({
				expiry_date: "yyyy-MM-dd",
				start_date: "yyyy-MM-dd",
				coupon_value: ''			
		 })

		 } )
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
     <input onChange={this.handleStartDateChange} className="datepicker" type="date" id="start" name="trip-start"
       value={this.state.start_date}
       ></input>
		<br></br>
		<br></br>
		<h4>Expiry Date:</h4>
		<input onChange={this.handleExpiryDateChange} className="datepicker" type="date" id="start" name="trip-start"
					value={this.state.expiry_date}
					max="2025-12-31"></input>
    <br></br>
		<br></br>
		<h4>Value/Amount (in dollars):</h4>
 
      <input className="datepicker" name='coupon_value' type='tel' min="0" required onChange={this.handleCouponValueChange} value={this.state.coupon_value} />
		
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