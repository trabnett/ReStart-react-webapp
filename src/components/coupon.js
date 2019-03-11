import React, { Component } from "react";



class Coupon extends Component{
    constructor(props){
        super(props);
        this.state={}
      }

    handleFormSubmit( event ) {
        let data = {
          email: "coke@tim.com",
          password: "asdf"
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
          if (data.alert = "sucessful login") {
            this.setState({
              redirect: true,
              brand_name: data.brand_name,
              coupons: data.coupons,
              brand_id: data.session_id,
              brand_email: data.email,
              password_hash: data.hash
             })
          console.log(this.state)
    
          }
        } )
        .catch(error => {
          this.setState({      
            email:'tim@tim.com',
            password:'asdf',
            show: false,
            redirect: false})
          console.log(error)})
    }

    render(){
            const data = this.props.state.coupons
        return (
            <div>
                <img src={this.props.state.logo} />
                <h1>{this.props.state.brand}</h1>
                <div>
                    {data.map(function(d, idx){
                        return (
                            <tr>
                                <td key={idx}>{idx + 1}</td>
                                <td key={idx}>{d.created_at}</td>
                                <td key={idx}>{d.code}</td>
                                <td key={idx}>{d.expirary_date}</td>
                                <td key={idx}><h2>{d.content}</h2></td>
                                <td key={idx}>{d.code}</td>
                                <td><button onClick={ this.handleFormSubmit.bind( this ) } value={idx + 1}>Delete</button></td>
                            </tr>)
                    })}
                </div>
            </div>
        )
    
    }

}





export default Coupon;