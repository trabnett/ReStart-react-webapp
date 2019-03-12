import React, { Component } from "react";
import DropdownDate from 'react-dropdown-date';

const formatDate = (date) => {	// formats a JS date to 'yyyy-mm-dd'
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
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
    name: '',
    email: '',
    subject: '',
    message: ''
   }
 
   this.handleChange = this.handleChange.bind(this)
   this.handleSubmit = this.handleSubmit.bind(this)
  }
 
  handleChange = (e) => {
   let newState = {}
 
   newState[e.target.name] = e.target.value
 
   this.setState(newState)
  }
 
 
  handleSubmit = (e, message) => {
   e.preventDefault()
 
   let formData = {
    formSender: this.state.name,
    formEmail: this.state.email,
    formSubject: this.state.subject,
    formMessage: this.state.message
   }
 
   if (formData.formSender.length < 1 || formData.formEmail.length < 1 || formData.formSubject.length < 1 || formData.formMessage.length < 1) {
    return false
   }

   this.setState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
   })
  }
 
  render() {
   return(
    <form className='react-form' onSubmit={this.handleSubmit}>
     <h1>Say Hi!</h1>

     <DropdownDate
                    startDate={                         // optional, if not provided 1900-01-01 is startDate
                        '2012-01-01'                    // 'yyyy-mm-dd' format only
                    }
                    endDate={                           // optional, if not provided current date is endDate
                        '2013-12-31'                    // 'yyyy-mm-dd' format only
                    }
                    selectedDate={                      // optional
                        this.state.selectedDate         // 'yyyy-mm-dd' format only
                    }
                    onMonthChange={(month) => {         // optional
                        console.log(month);
                    }}
                    onDayChange={(day) => {             // optional
                        console.log(day);
                    }}
                    onYearChange={(year) => {           // optional
                        console.log(year);
                    }}
                    onDateChange={(date) => {           // optional
                        console.log(date);
                        this.setState({ date: date, selectedDate: formatDate(date) });
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
 
      <input id='formEmail' className='form-input' name='email' type='email' required onChange={this.handleChange} value={this.state.email} />
     </fieldset>
 
     <div className='form-group'>
      <input id='formButton' className='btn' type='submit' placeholder='Send message' />
     </div>
    </form>
   )
  }
 }

  export default Form;