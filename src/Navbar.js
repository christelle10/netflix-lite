import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
    const [show, handleShow] = useState(false);
    
    useEffect(() => {
      window.addEventListener("scroll", () => { //when useEffect is triggered (scrolling after 100pixels in y axis), handleShow will takeplace
          if (window.scrollY > 100) {
              handleShow(true);
          }
          else handleShow(false);
      });
      return () => {
          window.removeEventListener("scroll", handleShow(false));
      };
  }, []);
  return (
    <div className ={`nav ${show && "nav_black"}`}> {/*if scrolling over 100 pixels, div will be nav_black else it's div*/}
        <img 
        className="nav_logo"
        src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
        alt = "Netflix Logo"/>

        <img 
        className="nav_avatar"
        src = "/netflix-avatar.png"
        alt = "Netflix Logo"/>
        
    </div>
    
  )
}

export default Navbar