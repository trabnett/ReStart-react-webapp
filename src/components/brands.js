import React, { Component } from "react";
import Coupon from "./coupon"
import Form from "./form"
import './../styles/brand.css';
import Graph from "./usagegraph"


class Brands extends Component{
    constructor(props) {
        super(props);
        this.state={}
    }


    componentDidMount() {
        const payload = this.props.location.state
        this.setState({...payload}, () => {
            console.log(this.state, "=====this state")
            fetch(`http://192.168.1.107:3000/brands/coupons?email=${this.state.email}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ coupons: data.coupons })
            });

        })
    }

    render(props){
        return (
					<div>
            <div className="brandheader">
                <h1>Brand: {this.props.location.state.brand_name}</h1>
						</div>
						<div className="content-splithalf">
							<div className="brandcolumn">
									<h2>Email: {this.state.email}</h2>
									<img src ={this.props.location.state.logo} class="brandlogo"/>
									<Graph/>
							</div>
							<div className="brandcolumn">
                <h2>Current & Expired Coupons</h2>
                <h3>{this.props.location.state.brand_name}</h3>
                 <Coupon data={this.state} />
                 <Form brand_name={this.state.brand_name}/>	 
            	</div>
						</div>
					</div>
        )
    
    }

}





export default Brands;