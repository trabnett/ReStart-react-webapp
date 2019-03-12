import React, { Component } from "react";
import Coupon from "./coupon"
import Form from "./form"



class Brands extends Component{
    constructor(props) {
        super(props);
        this.state={}
    }


    componentDidMount() {
        const payload = this.props.location.state
        this.setState({...payload}, () => {
            console.log(this.state, "=====this state")
            fetch(`http://localhost:3000/brands/coupons?email=${this.state.email}`)
            .then(response => response.json())
            .then(data => {
                console.log(data.coupons, "============")
                this.setState({ coupons: data.coupons })
            });

        })
    }

    render(props){
        console.log(this.state)
        return (
            <div>
                <a>{this.state.email}</a>
                <h1>{this.props.location.state.brand_name}</h1>
                <img src ={this.props.location.state.logo} />
                <h1>Create New Coupon</h1>
                <h2>{this.props.location.state.brand_name}</h2>
                 <Coupon data={this.state} />
                 <Form />
            </div>
        )
    
    }

}





export default Brands;