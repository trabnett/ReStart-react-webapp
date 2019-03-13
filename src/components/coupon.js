import React, { Component } from "react";
import Form from "./form"


class Coupon extends Component{
    constructor(props){
        super(props);
        this.state={}
      }

      onDelEvent() {
        this.props.onDelEvent(this.props.d);
    
      }

    render(){
            const coupons = this.props.data.coupons
            console.log("hey", this.props.data)
            if (!this.props.data.coupons){
                return null
            }
               
            return (
              <div>
                <h1>{this.props.data.brand}</h1>
                  {this.props.data.coupons.map(function(d, idx){
                    return (
                      <tr key={idx + 1}>
                          <td>{idx + 1}</td>
                          <td>{d.created_at}</td>
                          <td>{d.value}</td>
                          <td>{d.expirary_date}</td>
                          <td><h2>{d.content}</h2></td>
                      </tr>
                  )})}
              </div>
            )
    
    }

}



export default Coupon;