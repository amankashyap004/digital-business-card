import React from "react";

function Footer() {
   return (
      <footer className="footer">
         <a href="/">
            <div className="footer-contain">
               <i class="fa-brands fa-twitter"></i>
            </div>
         </a>
         <a href="/">
            <div className="footer-contain">
               {/* <i class="fa-brands fa-square-facebook"></i> */}
               <i class="fa-brands fa-facebook-f"></i>
            </div>
         </a>
         <a href="./">
            <div className="footer-contain">
               <i class="fa-brands fa-instagram"></i>
            </div>
         </a>
         <a href="https://github.com/amankashyap004" target="_blank">
            <div className="footer-contain last-contain">
               <i class="fa-brands fa-github"></i>
            </div>
         </a>
      </footer>
   );
}

export default Footer;
