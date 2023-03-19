import React from "react";

function ButtonBox() {
   return (
      <div className="btn-box">
         <div className="btn-container">
            <button type="submit" className="btn btn-email">
               <i className="fa-solid fa-envelope btn-icon"></i>
               Email
            </button>
         </div>
         <div className="btn-container">
            <button type="submit" className="btn btn-linkedIn">
               <i className="fa-brands fa-linkedin-in btn-icon"></i>
               LinkedIn
            </button>
         </div>
      </div>
   );
}

export default ButtonBox;
