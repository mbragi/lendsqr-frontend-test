import React from 'react'
import Navbar from '../NavBar/navbar';
import Sidebar from '../sidebar/sidebar';
import './dashboardframe.scss'
type ContentProps = {
  children: React.ReactNode; 
};
function DashbordFrame(props: ContentProps) {
  return (
    <React.Fragment>
     <section className='frame-container'>
        <Navbar/>
      <div className='frame-inner-container'>
      <div className='sidebar-component-container'>
      <Sidebar/>
      </div>
      <div className="content">
       {props.children}
      </div>
      </div>
     </section>
    </React.Fragment>
  )
}

export default DashbordFrame