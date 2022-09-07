import React from "react";
import './Account.css';
import ReactAudioPlayer from 'react-audio-player';
import { ReactDOM } from "react";

const mp3 = require( "./herecomemoney.mp3")

const Account = () => {

    return (
        <div className="">
        <div className="loader">

    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>

        <div className="account">
            <section className="details">
 
                <h2>
                    Personal Details
                </h2>
                <p>Name: Ben Robert</p>
                <p>Email: BenRoberts@codeclan.com</p>
                <p>Password: ****** <button> Change Password </button></p>
                <p>Membership: Free <button className="upgradebutton"><a href="https://www.alphavantage.co/support/#"> Upgrade Membership</a></button></p>
            </section>
            <section className="details">
                <h2>
                    Bank Details
                </h2>
                <p>Bank Name: Starling</p>
                <p>Bank Account Number: 23-41-**-** <button> Change Account Number </button></p>
                <p>Sort-Code: 80-75-60<button> Change Sort-Code </button></p>
               <p><ReactAudioPlayer
  src={mp3}
  autoplay={false}
  controls
/></p>
            </section>
            <section className="details">
                <h2>Subscription</h2>
                <p>Email Newsletter <input type="checkbox" /></p>
                <p>Text <input type="checkbox" /></p>
                <p>Post <input type="checkbox" /></p>
                <p><button> Unsubscribe</button></p>
            </section>
        </div>
        </div>
        </div>
    )
}

export default Account;