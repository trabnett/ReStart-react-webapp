import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Brands from "./brands";
import './../styles/modal.css';

const Modal =  () => (
  <Popup trigger={<button class="btn btn--red btn--animated"> Login / Sign Up</button>} modal>
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="popupname"> Log In </div>
        <div className="content">
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
          Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
          delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
        </div>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              close()
            }}
          >
            Close
          </button>
					<p> Forgot Password </p>
					<p> Looking to join or partner </p>	
        </div>
      </div>
    )}
  </Popup>
)

export default Modal;