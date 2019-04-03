import React, { Component } from "react";
import Coupon from "./coupon"
import Form from "./form"
import Confirm from "./confirm"
import './../styles/brand.css';
import Graph from "./usagegraph";
import white_logo_restart from "./../images/white_logo_restart.png";
// you must require the store on any page that gets it's state from redux
import store from '../redux/store';


class Brands extends Component{
    constructor(props) {
        super(props);
				this.state={redirect: false}
    }
    AddNewCoupon = (newCoupon) => {
        let array = []
        if (this.state.coupons) {
            array = [
                newCoupon,
                ...this.state.coupons				
            ]
        } else {
            array = [newCoupon]
        }
        
        this.setState({coupons: array})
    }

    LogOut = () => {
        let path = `/`;
        this.props.history.push(path);
    }

    componentDidMount() {
        // store.getState() is used to call the state from Redux. the initial state is in "../redux/reducers"
        const payload = store.getState().brand
        this.setState({...payload}, () => {
            console.log("state from redux ==>", this.state)
        })

    }

    render(props){
        return (
            <div>
                <div className="brandheader">
                    <picture>
                    <source srcSet={white_logo_restart}></source>
                    <img alt="Full logo" src="images/white_logo_restart.png" className="restartResize"></img>
                    </picture>   
                    <h1>Brand: {this.state.brand_name}</h1>
                    <button className="btn2 logout" onClick={this.LogOut}>Log out</button>
                </div>
                <div className="brandrow">
                    <div className="brandcolumn">
                        <h2>Profile:</h2>
                        <h3>Email: {this.state.brand_email}</h3>
                        <h3> Logo: </h3>
                        <img src ={this.state.brand_logo} class="brandlogo"/>	
                        <h2>Current & Expired Coupons</h2>
                        <h3>{this.state.brand}</h3>
                        <Coupon data={this.state} />	
                    </div>
                    <div className="brandcolumn">
                        <h2>Chart of Coupon Issuance:</h2>
                        <Graph/>
                    </div>
                    <div className="brandcolumn">    
                        <Form brand_name={this.state.brand_name} AddNewCoupon={this.AddNewCoupon}/>	 
                    </div>
                </div>
            </div>

        )
    
    }

}





export default Brands;