import React, { Component } from "react";
var Barcode = require('react-barcode');

class UserCoupons extends Component{
    
    render() {
        if (!this.props.coupons) {
            return <h1>Get out there and recycle to earn some coupons</h1>
        } else {
            return(
                <div>
                <h1>Your active coupons:</h1>
                    <table>
                        <div>
                            <tr>
                                <th>Brand</th>
                                <th>Coupon #</th>
                                <th>Date Issued</th>
                                <th>Value</th>
                                <th>Expiry Date</th>
                                <th>Coupon ID</th>
                            </tr>
                        </div>
                        {this.props.coupons.map(function(d, idx){
                            return (
                                <div>
                                <tr key={idx + 1}>
                                    <td><img src ={d.logo} class="userbrandlogo"/></td>
                                    <td>{idx + 1}</td>
                                    <td>{d.issue_date.slice(0,-14)}</td>
                                    <td>${d.amount}</td>
                                    <td>{d.expiry_date}</td>
                                    <td><Barcode value={d.barcode} height={35}/></td>
                                </tr>
                                </div>
                            )})}
                    </table>
                </div>
            )
        }
    }

}

export default UserCoupons;