import React, { Component } from "react";
import Coupon from "./coupon"



class Brands extends Component{
    constructor(props) {
        super(props);
        this.state={
            email:'coke@tim.com',
            password:'asdf',
            brand: 'coke',
            logo: 'https://www.coca-cola.ie/content/dam/journey/ie/en/hidden/History/heritage/596x334/the_logo_story_01122014_596x334.jpg',
            coupons: [{brand_id: 4, code: "78907", expiary_date: "1-1-2020", content: "thank you for drinking so much Dr. Pepper! Have this coupon for $1 off your next purchase. Also, you should see a doctor. This beverage is terrible for you.", item_number: 1, created_at: "1-1-2020"}, {brand_id: 4, code: "789027", expiary_date: "1-1-2020", content: "Hey, look at this.", item_number: 2, created_at: "1-1-2020"}],
        }

  
    }
    


    render(props){
        return (
            <Coupon state={this.state}/>
        )
    
    }

}





export default Brands;