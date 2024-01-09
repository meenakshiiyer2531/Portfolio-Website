
import React, { useState } from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
    <nav className='main-nav'>
        {/* 1st logo part */}
        <div className="logo">
            <h2>
                <span>V</span>Meenakshi  iyer    
                
            </h2>
        </div>

        {/* 2nd part */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
            <ul>
                <li>
                    <a href='#'>Home</a>         
                </li>
                <li>
                    <a href='#'>My Intro</a>         
                </li>
                <li>
                    <a href='#'>Skills</a>         
                </li>
                <li>
                    <a href='#'>Projects</a>         
                </li>
                <li>
                    <a href='#'>Experience and Education</a>         
                </li>
                <li>
                    <a href='#'>CV</a>         
                </li>
                <li>
                    <a href='#'>Contact Me</a>         
                </li>
            </ul>
             {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>

    </nav>
    </>
  )
}

export default Header
