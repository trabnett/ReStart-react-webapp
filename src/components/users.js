import React, { Component } from "react";
import Coupon from "./coupon"
import Form from "./form"
import './../styles/brand.css';
import Graph from "./usagegraph";
import white_logo_restart from "./../images/white_logo_restart.png";
import store from '../redux/store';


class Users extends Component{
    constructor(props) {
        super(props);
				this.state={redirect: false}
    }


    LogOut = () => {
        let path = `/`;
        this.props.history.push(path);
    }

    componentDidMount() {
        console.log(store.getState(), "this is the sotre on the users page")
        const payload = this.props.location.state
        this.setState({...payload})
    }

    render(props){
        return (
					<div>
            <div className="brandheader">
				<picture>
                  <source srcSet={white_logo_restart}></source>
                  <img alt="Full logo" src="images/white_logo_restart.png" className="restartResize"></img>
                </picture>   
                <h1>Welcome: {this.props.email}</h1>
					<button className="btn2 logout" onClick={this.LogOut}>Log out</button>
			</div>
						<div className="brandrow">
							<div className="brandcolumn">

                <h3></h3>
                 {/* <Coupon data={this.state} />	 */}
							</div>
							<div className="brandcolumn">
							<h2>Chart of Coupon Issuance:</h2>
							<Graph/>
							</div>
							<div className="brandcolumn">
                
                 {/* <Form brand_name={this.state.brand_name} AddNewCoupon={this.AddNewCoupon}/>	  */}
            	</div>
						</div>
					</div>
        )
    
    }

}





export default Users;