import React, { Component } from "react";
import './../styles/home.css';
import './../styles/globe.css';
import './../styles/modal.css';
import logoblackrestart from './../images/logoblackrestart.png';
import cardsnap from "./../images/cardsnap.png";
import cardcoupon from "./../images/cardcoupon.png";
import cardrecycle from "./../images/cardrecycle.png"
import white_logo_restart from "./../images/white_logo_restart.png";
import Modal from "./modal"
import Header from "./header"




const Section1 = () => {
    return(
        <div>
            <section className="section-features">    
                <div className="row">
                    <div className="col-1-of-3">
                        <div className="feature-box">
                            <h3 className="heading-tertiary u-margin-bottom-small">Snap and earn points</h3>
                            <img src={cardsnap} alt="image of camera snapping" className="feature_image"></img>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="feature-box">
                            <h3 className="heading-tertiary u-margin-bottom-small">Coupons from favourite brands</h3>
                            <img src={cardcoupon} alt="image of pricing being cut to signal coupon" className="feature_image"></img>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="feature-box">
                            <h3 className="heading-tertiary u-margin-bottom-small">Understand your recycling</h3>
                            <img src={cardrecycle} alt="traditional image of recycling with circle arrows" className="feature_image"></img>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

const Section2 = () => {
    return( 
        <div>
            <section>
				<div className="mission-box">
				  <div className="row">
					<div className="column">
                    <div className="statement-box">
                        <h2 className="center">The mission should you choose to accept it...</h2>
                    </div>
                    <div className="middle">
                        <h2>Save the planet</h2>
                        <p>In North America we produce more waste per person than anywhere else in the world... </p>
                        <p><strong> We recycle less than 9% of items </strong> </p>
                        <p>although more than 70% are recyclable, resuable etc! Most of us don’t know what’s recyclable, but also we can forget </p>
                    </div>
					</div>
					<div className="column">
                    <div className="mission-column"></div>
                    <div className="container">
                        <div className="frame">
                            <div className="globe">
                                <div className="gloss"></div>
                            </div>
                        </div>
                        <div className="base"></div>
                    </div>
                    <div className="final_action">
                        <a href="" className="btn btn--red btn--animated">Sign Up</a>
                    </div>
						</div>
					</div> 
				</div>
			</section> 

        </div>
   )
}

const Footer = () => {
    return( 
        <div>
            <footer className="footer">
                <div className="footer__logo-box">
                    <picture className="footer__logo">
                        <source srcSet={white_logo_restart}></source>
                        <img srcSet="images/white_logo_restart.png 1x, images/white_logo_restart.png 2x" alt="Full logo" src="images/white_logo_restart.png"></img>
                    </picture>   
                </div>
                <div className="footer__navigation">
                    <ul className="footer__list">
                        <li className="footer__item"><a href="#" class="footer__link">About Us</a></li>
                        <li className="footer__item"><a href="#" class="footer__link">Become Partner</a></li>
                        <li className="footer__item"><a href="#" class="footer__link">Terms & Conditions</a></li>
                        <li className="footer__item"><a href="#" class="footer__link">Privacy policy</a></li>
                    </ul>
                </div>
        </footer>
    </div>
    )
}

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
        username:'',
        password:'',
        }
       }

    Click = () => {
        this.setState({show: !this.state.show})
    }

 
    render() {
        return(
            <div>
                <Header Click={this.Click}/>
                <Section1 />
                <Section2 />
                <Footer />
            </div>

            

        );
    }
}

export default Home;