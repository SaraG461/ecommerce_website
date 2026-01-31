import React from 'react';
import { FaShippingFast, FaSearch, FaRegUser } from "react-icons/fa";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from 'react-router-dom';
import './nav.css';

const Nav = () => {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();

  if (isLoading) return null;

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

      
      <div className="mid_header">
        
        <div className="logo">
          <img src="images/logo.png" alt="logo" />
        </div>

        
        <div className="search_box_container">
          <div className="search_box">
            <input type="text" placeholder="Search for products…" />
            <button aria-label="Search">
              <FaSearch />
            </button>
          </div>
        </div>

        
        <div className="user">
          
          <div className="icon">
            {isAuthenticated ? <IoIosLogOut /> : <IoIosLogIn />}
          </div>

          
          <div className="btn">
            {isAuthenticated ? (
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Logout
              </button>
            ) : (
              <button onClick={() => loginWithRedirect()}>Login</button>
            )}
          </div>

          
          {isAuthenticated && (
            <div className="user_profile">
              <div className="icon">
                <FaRegUser />
              </div>
              <div className="info">
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
            </div>
          )}
        </div>
        <div className="nav">
            <ul>
                <li><Link to="/" className='link'>Home</Link></li>
                <li><Link to="/shop" className='link'>Shop</Link></li>
                <li><Link to="/collection" className='link'>Collection</Link></li>
                <li><Link to="/about" className='link'>About</Link></li>
                <li><Link to="/contact" className='link'>Contact</Link></li>
                
            </ul>
        </div>
        <div className='offer'>
            <p>Special Offer: Free Shipping on Orders Over £50!</p>

        </div>
      </div>
    </div>
  );
};

export default Nav;
