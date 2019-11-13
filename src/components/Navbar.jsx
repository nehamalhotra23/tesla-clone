import React from "react";
import { Link } from 'react-router-dom';


function Navbar() {

  var navigation = {
    paddingTop: "30px",
    paddingBottom: "30px",
    position: 'absolute',
    top: '0',
    width: '100%',
    zIndex: '1',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  };

  var navbarRight = {
    float: "right",
    textDecoration: "none",
    padding: "10px",
    color: "#fff",
    fontFamily: "Arial",
    fontWeight: "900",
    '&:hover': {
      textDecoration: "underline"
    }
  };
  var link = {
    textDecoration: "none",
    padding: "10px",
    color: "#fff",
    fontFamily: "Arial",
    fontWeight: "900",
    '&:hover': {
      textDecoration: "underline"
    }
  };

  var logo = {
    paddingLeft: "2%",
    fontFamily: "Arial",
    fontSize: "30px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#fff"
  };

  var center = {
    textDecoration: "none",
    padding: "10px",
    color: "#fff",
    fontFamily: "Arial",
    fontWeight: "900",
    '&:hover': {
      textDecoration: "underline"
    }
  };
  var modelX = {
    textDecoration: "none",
    padding: "10px",
    color: "#fff",
    fontFamily: "Arial",
    fontWeight: "900",
    marginLeft: '30vmax',
    marginRight: 'auto',
    '&:hover': {
      textDecoration: "underline"
    }
  };
  var navDiv = {
    marginRight: '5%'
  }

  return (
    <div style={navigation}>
      <div className="header">
        <nav>
          <div style={navDiv}>
            <Link to="/" style={logo}>TESLA </Link>
            <Link to="/modelX" style={modelX}>Model X</Link>
            <Link to="/modelY" style={center}>Model Y</Link>
            <Link to="/modelS" style={center}>Model S</Link>
            <Link to="/model3" style={center}>Model 3</Link>
            <a style={navbarRight} href="#">SHOP</a>
            <a style={navbarRight} href="#">SIGN IN</a>

          </div>
        </nav>
      </div>
    </div>

  );
}
export default Navbar;