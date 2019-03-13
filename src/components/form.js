import React, { Component } from "react";
import DropdownDate from 'react-dropdown-date';


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
    let code = Math.floor(Math.random()*90000) + 10000;
    this.setState({
      brand_name: this.props.brand_name,
      code: code
    }, ()=> {
   console.log(this.state)
   let data = {...this.state}
  console.log(data)
  var headers = {
    Accept: 'application/json',
    "Content-Type": "application/json"
 }
 fetch('http://localhost:3000/brands/coupons', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    } )
})


  }
 
  render() {
   return(
    <form className='react-form' onSubmit={this.handleSubmit}>
     <h1>Please enter an expiry date and value for your new coupon</h1>

     <DropdownDate
                    startDate={                         // optional, if not provided 1900-01-01 is startDate
                        '2019-01-01'                    // 'yyyy-mm-dd' format only
                    }
                    endDate={                           // optional, if not provided current date is endDate
                        '2025-12-31'                    // 'yyyy-mm-dd' format only
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
 
      <input className='form-input' name='coupon_value' type='tel' min='0' required onChange={this.handleCouponValueChange} value={this.state.coupon_value} />
     </fieldset>
 
     <div className='form-group'>
      <input id='formButton' className='btn' type='submit' placeholder='Send message' />
     </div>
    </form>
   )
  }
 }

  export default Form;