import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import bell_icon from '../../assets/bell_icon.svg'
import search_icon from '../../assets/search_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

const Navbar = () => {
  const navRef=useRef();
  useEffect(()=>{
   window.addEventListener('scroll',()=>{
    if(window.scrollY>=80){
      navRef.current.classList.add('add-dark');
    }
    else{
      navRef.current.classList.remove('add-dark');
    }
   })
  },[])
  return (
    <div className='navbar' ref={navRef}>
    
      <div className="navbar-left">
         <img src={logo}/>
         <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>News & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
         </ul>
      </div>
        <div className="navbar-right">
       <img src={search_icon} alt="" className='icons'/>
       <p>Children</p>
         <img src={bell_icon} alt="" className='icons'/>
         <div className="navbar-profile">
          <img src={profile_img} alt="" className='profile'/>
          <img src={caret_icon} alt="" />
          <div className="dropdown">
            <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Navbar