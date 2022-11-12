import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const walletConnect = ({cancelWallet, handleCancelIcon}) => {
    const cancelWalletStyle = {
        visibility : 'visible'
    }
   
  return (
    <div style={cancelWallet ? cancelWalletStyle : null} className='wallet-connect'>
      <div className='walletConnect-wrap'>
        <div className='walletConnect-header'>
          <p>Connect Wallet</p>
          <FontAwesomeIcon icon='times' className='cancel-wallet-connect' onClick={handleCancelIcon} />
        </div>
        <div style={{ padding: "20px" }}>
          <p>Choose your Preferred Wallet</p>
          <div className='wallet-button'>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src='/img/image 66.svg' alt='img' />
              <span>Metamask</span>
            </div>
            <FontAwesomeIcon className='wallet-angle-icon' icon='angle-right' />
          </div>
          <div className='wallet-button'>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src='/img/image 69.svg' alt='img' />
              <span>walletConnect</span>
            </div>
            <FontAwesomeIcon className='wallet-angle-icon' icon='angle-right' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default walletConnect;
