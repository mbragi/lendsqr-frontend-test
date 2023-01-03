import React from 'react'
import union from '../../assests/Union.png'
import lend from '../../assests/lendsqr.png'
import "./navbar.scss"

function Navbar() {
  return (
    <div className='navbar-container'>
       <div className="logo-container">
          <img src={union} alt="union" width='30' height='25'/>
          <img src={lend} alt="lendsqr" width='100' height='35' />
        </div>
        <div className='search-input-container'>
         <input type="text" placeholder='search for everything' />
         <button>
          <span>
           <img src="" alt="search" />
          </span>
         </button>
        </div>
        <div className='notifications-container'>

        </div>
    </div>
  )
}

export default Navbar