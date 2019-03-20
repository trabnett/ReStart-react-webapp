import React, { Component } from "react";
import Coupon from "./coupon"
import Form from "./form"
import './../styles/brand.css';
import Graph from "./usagegraph";
import white_logo_restart from "./../images/white_logo_restart.png";


class Confirm extends Component{
    constructor(props) {
        super(props);
				this.state={redirect: false}
    }

    LogOut = () => {
        let path = `/`;
        this.props.history.push(path);
    }
    render(){
        return(
            <div>
                <div className="brandheader">
                    <picture>
                        <source srcSet={white_logo_restart}></source>
                        <img alt="Full logo" src="images/white_logo_restart.png" className="restartResize"></img>
                    </picture>   
                    <h1>Please enter your precious data!: {this.props.location.state.email}</h1>
                    <button className="btn2 logout" onClick={this.LogOut}>Log out</button>
                </div>
                <div>
                    <h1>Hello new user or brand. Welcom to ReStart</h1>
                    <p>this is a test of what is possible, but it should be doing something!</p>
                </div>
            </div>
        )
    }
}

export default Confirm;