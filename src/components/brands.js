import React, { Component } from "react";
import Coupon from "./coupon"
import Form from "./form"
import './../styles/brand.css';
import Graph from "./usagegraph";
import white_logo_restart from "./../images/white_logo_restart.png";


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
        const payload = this.props.location.state
        this.setState({...payload}, () => {
            console.log(this.state, "=====this state")
            fetch(`http://localhost:3000/brands/coupons?email=${this.state.email}`)
            .then(response => response.json())
            .then(data => {
                console.log('is this happening?')
                this.setState({ coupons: data.coupons })
            });

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
                <h1>Brand: {this.props.location.state.brand_name}</h1>
								<button className="btn2 logout" onClick={this.LogOut}>Log out</button>
						</div>
						<div className="brandrow">
							<div className="brandcolumn">
									<h2>Profile:</h2>
									<h3>Email: {this.state.email}</h3>
									<h3> Logo: </h3>
									<img src ={this.props.location.state.logo} class="brandlogo"/>	
									<h2>Current & Expired Coupons</h2>
                <h3>{this.props.location.state.brand_name}</h3>
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