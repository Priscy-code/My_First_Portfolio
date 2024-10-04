import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import moon from '../../assets/moon.png'
import search from '../../assets/search.png'


const Navbar = ({theme, setTheme}) => {
    const toggle_mode =()=> {
        theme =='light'? setTheme('dark'):setTheme('light');

    }
  return (
    <div className='navbar'>

      <img src={logo} alt="" className='logo' />

      <ul className='nava'>
        <li>Home</li>
        <li>About us </li>
        <li>Product</li>
        <li>Features</li>
      </ul>

      <div className='search-box'>
        <input type="text" placeholder='Search' />
        <img src={search} alt="" />
      </div>

      <img onClick= {()=>{toggle_mode}}
      src={moon} alt=""  className='moon-icon'/>
    </div>
  )
}

export default Navbar
