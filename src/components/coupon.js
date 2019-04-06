/* this component gathers all issued coupons*/
import React, { Component } from "react";
import Form from "./form"
import './../styles/brand.css';
var Barcode = require('react-barcode');


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
                    <h2>{this.props.data.first_name}</h2>
                <div>
					<table>
                        <tr>
                            <th>Coupon #</th>
                            <th>Date Created</th>
                            <th>Value</th>
                            <th>Expiry Date</th>
                            <th>Coupon ID</th>
                        </tr>
                        {this.props.data.coupons.map(function(d, idx){
                            return (
                                <tr key={idx + 1}>
                                    <td>{idx + 1}</td>
                                    <td>{d.created_at.slice(0,-14)}</td>
                                    <td>${d.value}</td>
                                    <td>{d.expiary_date}</td>
                                    <td><Barcode value={d.code} height={35}/></td>
                                </tr>
                            )})}
					</table>
                </div>
            </div>
        )
    }

}



export default Coupon;