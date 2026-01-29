import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";

import './nav.css'

const Nav = () => {
  return (
    <div className="header">
        <div className="top_header">
            <div className="icon">
                <FaShippingFast />
            </div>
            <div className="info">
                <p>Fast Shipping and Reliable Service</p>

            </div>

        </div>
        <div className= "mid_header">
         <div className="logo">
            <img src="images/logo.png" alt="logo"></img> 

         </div>
         <div className="search_box">
            <input type="text" value=" " placeholder="Search for products, brands and more"></input>
            <button><FaSearch /></button>

         </div>
         <div className="user">
            <div className="icon">
                <IoIosLogIn />

            </div>
            <div className="btn">
                <button>Login</button>
            </div>
         </div>

         </div>

    </div>
  )
}

export default Nav