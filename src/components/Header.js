import React from "react";

function Header() {
   return (
      <header className="header">
         <div className="logo">
            <img src="./img/image.png" />
         </div>
         <div className="heading">
            <h2 className="main-heading">Laura Smith</h2>
            <h4 className="sub-heading">Frontend Developer</h4>
         </div>
      </header>
   );
}

export default Header;
