import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logoblackrestart from './../images/logoblackrestart.png';
import cardsnap from "./../images/cardsnap.png";
import cardcoupon from "./../images/cardcoupon.png";
import cardrecycle from "./../images/cardrecycle.png"
import white_logo_restart from "./../images/white_logo_restart.png";
import Modal from "./modal"



class Header extends Component {
  render(){

    return(
        <div>
            <div>
                <header className="header">
                    <nav className="header__nav">
                        <img src={logoblackrestart} alt="ReStart Logo" className="header__logo"></img>
                        <Modal />
                    </nav>

                    <div className="header__text-box">
                        <h1 className="heading-primary">
                            <span className="heading-primary--main">Recycling Gamified</span>
                        </h1>
                    </div>
                </header>
            </div>
        </div>

    );
  }
}


export default Header;