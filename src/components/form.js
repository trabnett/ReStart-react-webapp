/* this is the form component to make new coupons*/
import React, { Component } from "react";
import DropdownDate from 'react-dropdown-date';
//import DatePicker from 'react-bootstrap-date-picker';


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

     <DropdownDate
                    startDate={                         // optional, if not provided 1900-01-01 is startDate
                        '2019-01-01'                    // 'yyyy-mm-dd' format only
                    }
                    endDate={                           // optional, if not provided current date is endDate
                        '2022-12-31'                    // 'yyyy-mm-dd' format only
                    }
                    
                    onDateChange={(date) => {           // optional
                        this.setState({ expiry_date: date });
                    }}
                    ids={                               // optional
                        {
                            year: 'select-year',
                            month: 'select-month',
                            day: 'select-day'
                        }
                    }
                    names={                             // optional
                        {
                            year: 'year',
                            month: 'month',
                            day: 'day'
                        }
                    }
                    classes={                           // optional
                        {
                            dateContainer: 'classes',
                            yearContainer: 'classes',
                            monthContainer: 'classes',
                            dayContainer: 'classes',
                            year: 'classes classes',
                            month: 'classes classes',
                            day: 'classes classes',
                            yearOptions: 'classes',
                            monthOptions: 'classes',
                            dayOptions: 'classes'
                        }
                    }
                    defaultValues={                     // optional
                        {
                            year: 'select year',
                            month: 'select month',
                            day: 'select day'
                        }
                    }
                    options={                           // optional
                        {
                            yearReverse: true,              // false by default
                            monthShort: true,               // false by default
                            monthCaps: true                 // false by default
                        }
                    }
                />
 

     <fieldset className='form-group'>
      <ReactFormLabel htmlFor='formEmail' title='Value:' />
 
      <input className='form-input' name='coupon_value' type='number' required onChange={this.handleCouponValueChange} value={this.state.coupon_value} />
     </fieldset>
 
     <div className='form-group'>
      <input id='formButton' className='btn' type='submit' placeholder='Send message' />
     </div>
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