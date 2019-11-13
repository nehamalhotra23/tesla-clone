import React from "react";

function Navbar() {
    return (
        <div className="navMain">
            <style jsx>{`
         ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            z-index: 1;
            position: absolute;
            background-color: rgba(0, 0, 0, 0.5);
            width: 100%;
          }
          
          li {
            float: right;
          }
          
          li a {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            
          }
          
          li a:hover {
            background-color: #111;
          }
          .models{
            margin-right: 32vmax;
          }
          .logo{
              float: left;
              margin-right: 50px;
          }
       
         
     
    
        `}</style>
            
            <ul>
            
                <li><a href="#contact">SHOP</a></li>
                <li><a href="#about">SIGN IN</a></li>
                <li className='logo'><a href="#about">TESLA</a></li>
                
                <li className="models"><a class="active" href="#home">MODEL S</a></li>
                <li ><a href="#news">MODEL X</a></li>
                <li ><a href="#contact">MODEL 3</a></li>
                <li><a href="#about">MODEL Y</a></li>
              
               
               
            </ul>

        </div>
    );
}
export default Navbar;