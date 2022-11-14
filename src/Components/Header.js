import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Style/header.css'
import WalletConnect from "./walletConnect";

const Header = () => {
  const [cancelWallet, SetCancelWallet] = useState(false);
  const handleWalletClick = () => {
    SetCancelWallet(true);
  };
  const handleCancelIcon = () => {
    SetCancelWallet(false);
  };
  return (
    <div>
      <WalletConnect
        cancelWallet={cancelWallet}
        handleCancelIcon={handleCancelIcon}
      />
      <nav>
        <div className='header-wrap'>
          <div className='header-sub-wrap'>
            <img src='/img/group.png' alt='img' />
          </div>
          <div className="header-nav-link">
            {headerLink.map((item) => (
              <Link to={item.link} className='link-list' key={item.key}>
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
