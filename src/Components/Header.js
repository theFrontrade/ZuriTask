import React, { useState } from "react";
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
    <nav >

      <div className='header-wrap'>
        
        <div className='header-sub-wrap'>
          <img src='/img/group.png' alt='img' />
        </div>
        <div>
          <ul>
            {headerLink.map((item) => (
              <li className='link-list' key={item.key}>
                {item.name}
              </li>
            ))}
          </ul>
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
    link: "",
  },
  {
    key: 2,
    name: "Place to stay",
    link: "",
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
