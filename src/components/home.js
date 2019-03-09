import React from "react";
import './../styles/home.css';
import './../styles/globe.css';
import logoblackrestart from './../images/logoblackrestart.png';
import cardsnap from "./../images/cardsnap.png";
import cardcoupon from "./../images/cardcoupon.png";
import cardrecycle from "./../images/cardrecycle.png"
import white_logo_restart from "./../images/white_logo_restart.png";

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
            <section>
				<div class="mission-box"> 
                    <div class="statement-box">
                        <h2 class="center">The mission should you choose to accept it...</h2>
                    </div>
                    <div class="middle">
                        <h2>Save the planet</h2>
                        <p>In North America we produce more waste per person than anywhere else in the world... </p>
                        <p><strong> We recycle less than 9% of items </strong> </p>
                        <p>although more than 70% are recyclable, resuable etc! Most of us don’t know what’s recyclable, but also we can forget </p>
                    </div>
                    <div class="mission-column"></div>
                    <div class="container">
                        <div class="frame">
                            <div class="globe">
                                <div class="gloss"></div>
                            </div>
                        </div>
                        <div class="base"></div>
                    </div>
                    <div class="final_action">
                        <a href="" class="btn btn--red btn--animated">Sign Up</a>
                    </div>
				</div>
			</section> 

        </div>
   )
}

const Footer = () => {
    return( 
        <div>
            <footer class="footer">
                <div class="footer__logo-box">
                    <picture class="footer__logo">
                        <source srcSet={white_logo_restart}></source>
                        <img srcSet="images/white_logo_restart.png 1x, images/white_logo_restart.png 2x" alt="Full logo" src="images/white_logo_restart.png"></img>
                    </picture>   
                </div>
                <div class="footer__navigation">
                    <ul class="footer__list">
                        <li class="footer__item"><a href="#" class="footer__link">About Us</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Become Partner</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Terms & Conditions</a></li>
                        <li class="footer__item"><a href="#" class="footer__link">Privacy policy</a></li>
                    </ul>
                </div>
        </footer>
    </div>
    )
}

const Home = () => {
    return(
        <div>
            <Header />
            <Section1 />
            <Section2 />
            <Footer />
        </div>

        

    );
}

export default Home;