import React from 'react'

 const Header = () => {
      return (
          <div className='header-wrap'>
              <div className="header-sub-wrap">
                  <img src='/img/group.png' alt='img'/>
              </div>
              <div>
                <ul>
                    {
                        headerLink.map((item) => <li className="link-list" key={item.key}>{item.name}</li>)
                    }
                </ul>
              </div>
              <button className='header-button'>Connect Wallet</button>
          </div>
      )
 }
 export default Header
 export const headerLink = [
     {
         key:1,
         name : 'Home',
         link : "" ,
     },
     {
        key:2,
        name : 'Place to stay',
        link : "" ,
    },
    {
        key:3,
        name : 'NFTs',
        link : "" ,
    },
    {
        key:4,
        name : 'Community',
        link : "" ,
    },
 ]