import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Style/header.css'
import WalletConnect from "./walletConnect";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false)
  const [cancelWallet, SetCancelWallet] = useState(false);
  const handleWalletClick = () => {
    setMobileNav(false)
    SetCancelWallet(true);
  };
  const handleCancelIcon = () => {
    SetCancelWallet(false);
  };
const mobileNavStyle = {
  display : 'block'
}
 
  return (
    <div>
      <WalletConnect
        cancelWallet={cancelWallet}
        handleCancelIcon={handleCancelIcon}
      />
      <nav>
        <div className='header-wrap'>
          <FontAwesomeIcon icon='bars' onClick={() => setMobileNav(true)} className='mobile-bars' />
          <div className='header-sub-wrap'>

            <img src='/img/group.png' alt='img' />
          </div>
          <div style={mobileNav? mobileNavStyle : null} className="header-nav-link">
            <FontAwesomeIcon icon='times' className="mobile-cancel-button" onClick={()=>setMobileNav(false)} />
            {headerLink.map((item) => (
              <Link to={item.link} onClick={()=>setMobileNav(false)} className='link-list' key={item.key}>
                {item.name}
              </Link>
            ))}
          </div>
          <button className='header-button' onClick={handleWalletClick}>
            Connect Wallet
          </button>
        </div>
      </nav>
    </div>
  );
};
export default Header;
export const headerLink = [
  {
    key: 1,
    name: "Home",
    link: "/",
  },
  {
    key: 2,
    name: "Place to stay",
    link: "/placetostay",
  },
  {
    key: 3,
    name: "NFTs",
    link: "",
  },
  {
    key: 4,
    name: "Community",
    link: "",
  },
];
