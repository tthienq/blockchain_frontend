import React, { useState } from 'react';
import 'styles/navbar.scss';
import iclogo from 'assets/short-logo.png';
import icAccount from 'assets/ic_account.png';
import icBuy from 'assets/buy-eth.svg';
import { FiChevronDown } from "react-icons/fi";

export default function Navbar() {
  const [statusDropdown, setStatusDropdown] = useState(false);
  return (
    <div className="my-navbar">
      <div className="navbar__left">
        <img src={iclogo} alt="" />
      </div>
      <div className="navbar__right">
        <div className="navbar__list">
          <div className="navbar__item">
            <div className="navbar__item__title"><img src={icBuy} alt="" />Buy ETH</div>
          </div>
          <div className="navbar__item">
            <div className="navbar__item__title">Transaction History</div>
          </div>
          <div className="navbar__item" onClick={() => setStatusDropdown(!statusDropdown)}>
            <div className="navbar__item__title"><img src={icAccount} alt="" /><FiChevronDown/></div>
            <div className={`n-dropdown ${statusDropdown ? 'n-dropdown--show' : ''}`}>
              <div className="n-dropdown__wrapper">
                <div className="n-dropdown__item">Logout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}