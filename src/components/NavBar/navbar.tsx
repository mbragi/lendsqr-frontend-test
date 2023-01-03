import React from 'react'
import union from '../../assests/Union.png'
import lend from '../../assests/lendsqr.png'
import notify from '../../assests/notify.png'
import dropdown from '../../assests/dropdown.png'
import search from '../../assests/search.png'

import "./navbar.scss"

function Navbar() {
  return (
    <div className='navbar-container'>
       <div className="logo-container">
          <img src={union} alt="union" width='30' height='25'/>
          <img src={lend} alt="lendsqr" width='100' height='35' />
        </div>
        <div className='search-input-container'>
         <input type="text" placeholder='search for everything' className='search-input' />
         <button className='search-button'>
          <span >
           <img src={search} alt="search" width='10'/>
          </span>
         </button>
        </div>
        <div className='notifications-container'>
       <a href="/">Docs</a>
       <img  src={notify} alt="notify" />
       <div className='dropdown-section'>
       <img src="" alt="userProfile" />
       <p>firstName</p>
       <img src={dropdown} alt="dropdown" />
       </div>
        </div>
    </div>
  )
}

export default Navbar