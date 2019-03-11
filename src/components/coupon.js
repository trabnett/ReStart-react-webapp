import React, { Component } from "react";



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
        return (
            <div>
                <img src={this.props.data.logo} />
                <h1>{this.props.data.brand}</h1>
                <div>
                    {coupons.map(function(d, idx){
                        return (
                            <tr>
                                <td key={idx + 1}>{idx + 1}</td>
                                <td key={idx + 1}>{d.created_at}</td>
                                <td key={idx + 1}>{d.code}</td>
                                <td key={idx + 1}>{d.expirary_date}</td>
                                <td key={idx + 1}><h2>{d.content}</h2></td>
                            </tr>
                    )})}
                </div>
            </div>
        )
    
    }

}



export default Coupon;