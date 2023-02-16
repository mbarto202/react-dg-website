import React, { useState } from 'react'
import './header.css'
import { FaBars } from 'react-icons/fa'



const Header = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick (!click);

  return (
    <h1>
      Name
      <div className='menu-icon' onClick={handleClick}>
        <FaBars className='FaBars'/>
      </div>
    </h1>
  )
}

export default Header