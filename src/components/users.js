import React, { Component } from "react";
import Coupon from "./coupon"
import Form from "./form"
import './../styles/brand.css';
import Graph from "./usagegraph";
import white_logo_restart from "./../images/white_logo_restart.png";
import store from '../redux/store';
var Barcode = require('react-barcode');


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
        console.log(store.getState().user, "this is the sotre on the users page")
        const payload = store.getState().user
        this.setState({...store.getState().user}, () => {
            console.log(this.state, "<== this.state")
        })
    }

    render(props){
        if (this.state.coupons && this.state.first_name) {
        return (
            <div>
                <div className="brandheader">
                    <picture>
                    <source srcSet={white_logo_restart}></source>
                    <img alt="Full logo" src="images/white_logo_restart.png" className="restartResize"></img>
                    </picture>   
                    <h1>Welcom to ReStart: {this.state.first_name}</h1>
                    <button className="btn2 logout" onClick={this.LogOut}>Log out</button>
                </div>
                <div className="brandrow">
                    <div className="brandcolumn">
                        <h2>User Profile:</h2>
                        <h2>First Name: {this.state.first_name}</h2>
                        <h2>Last Name: {this.state.last_name}</h2>
                        <h2>Points: {this.state.points}</h2>
                        <h2>Email: {this.state.email}</h2>
                        <h2>Postcode: {this.state.postcode}</h2>
                    </div>
                    <div className="brandcolumn">
                        <div>
                            <h2>Chart of Recycling Habits:</h2>
                            <Graph/>
                        </div>
                        <div>
                            <h2>Chart of Coupon Usage:</h2>
                            <Graph/>
                        </div>

                    </div>
                    <div className="brandcolumn">
                        <h1>Your active coupons:</h1>
                        <table>
                            <tr>
                                <th>Coupon #</th>
                                <th>Date Issued</th>
                                <th>Value</th>
                                <th>Expiry Date</th>
                                <th>Coupon ID</th>
                            </tr>
                            {this.state.coupons.map(function(d, idx){
                                return (
                                    <div>
                                    <tr key={idx + 2}><img src ={d.logo} class="brandlogo"/>	</tr>
                                    <tr key={idx + 1}>
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
                </div>
            </div>
        )
                            } else {
                                return (<h1>There seems to be a problem. Are you sure you are logged in?</h1>)
                            }
    
    }

}





export default Users;