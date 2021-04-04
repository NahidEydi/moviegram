import React,{useEffect,useState} from "react";
import Logo from "./Logo";
import Avatar from "./Name/Index";
import './Nav.css'

const Navbar = () => {
  const [show, handleShow] = useState(false);
    useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY>100){
        handleShow(true);
      }else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    
    
      <div className={`nav ${show && "nav__black"}`}>
        <div className="nav__contents">
          <Logo />
          <Avatar />
        </div>
      </div>
    
  );
};

export default Navbar;
