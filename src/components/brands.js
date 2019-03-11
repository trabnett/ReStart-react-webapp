import React, { Component } from "react";
import Coupon from "./coupon"
import Form from "./form"



class Brands extends Component{
    constructor(props) {
        super(props);
        this.state={

        }

  
    }
    
    // const seed = [{brand_id: 4, code: "78907", expiary_date: "1-1-2020", content: "thank you for drinking so much Dr. Pepper! Have this coupon for $1 off your next purchase. Also, you should see a doctor. This beverage is terrible for you.", item_number: 1, created_at: "1-1-2020"}, {brand_id: 4, code: "789027", expiary_date: "1-1-2020", content: "Hey, look at this.", item_number: 2, created_at: "1-1-2020"}]

    render(props){
        return (
            <div>
                <h1>{this.props.location.state.brand_name}</h1>
                <img src ={this.props.location.state.logo} />
                <h1>Create New Coupon</h1>
                <h2>{this.props.location.state.brand_name}</h2>
                <Form />
            </div>
        )
    
    }

}





export default Brands;