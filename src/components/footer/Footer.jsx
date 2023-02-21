import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footerLogo'>Yvette Aviles</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#library'>Resources</a></li>
        <li><a href='#games'>Games</a></li>
      </ul>

      <div className="footerSocials">
        <a href="https://linkedin.com"><BsLinkedin/></a>
        <a href="https://facebook.com"><FaFacebookF/></a>
      </div>
    
      <div className="footerCopyright">
        <small>&copy; Michael Barto. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer