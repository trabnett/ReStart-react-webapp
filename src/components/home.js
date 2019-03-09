import React from "react";
import './../styles/home.css';
import logoblackrestart from './../images/logoblackrestart.png';
import cardsnap from "./../images/cardsnap.png";
import cardcoupon from "./../images/cardcoupon.png";
import cardrecycle from "./../images/cardrecycle.png"

const Header = () => {
    return(
        <div>
            <header class="header">
				<nav class="header__nav">
                    <img src={logoblackrestart} alt="ReStart Logo" class="header__logo"></img>
                    <a href="" class="btn btn--red btn--animated">Login / Sign Up</a>
				</nav>

                <div class="header__text-box">
                    <h1 class="heading-primary">
                        <span class="heading-primary--main">Recycling Gamified</span>
                    </h1>
                </div>
            </header>
        </div>
    );
}

const Section1 = () => {
    return(
        <div>
            <section class="section-features">    
                <div class="row">
                    <div class="col-1-of-3">
                        <div class="feature-box">
                            <h3 class="heading-tertiary u-margin-bottom-small">Snap and earn points</h3>
                            <img src={cardsnap} alt="image of camera snapping" class="feature_image"></img>
                        </div>
                    </div>
                    <div class="col-1-of-3">
                        <div class="feature-box">
                            <h3 class="heading-tertiary u-margin-bottom-small">Coupons from favourite brands</h3>
                            <img src={cardcoupon} alt="image of pricing being cut to signal coupon" class="feature_image"></img>
                        </div>
                    </div>
                    <div class="col-1-of-3">
                        <div class="feature-box">
                            <h3 class="heading-tertiary u-margin-bottom-small">Understand your recycling</h3>
                            <img src={cardrecycle} alt="traditional image of recycling with circle arrows" class="feature_image"></img>
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

        </div>
   )
}

const Home = () => {
    return(
        <div>
            <Header />
            <Section1 />
        </div>

        

    );
}

export default Home;