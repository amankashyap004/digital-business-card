import React from "react";

function Information() {
   return (
      <div className="information-container">
         <div className="about-section section">
            <h3 className="info-heading">About</h3>
            <p className="info-text">
               I am a frontend developer with a particular interest in making things simple and
               automating daily tasks. I try to keep up with security and best practices, and am
               always looking for new things to learn.
            </p>
         </div>
         <div className="interests-section section">
            <h3 className="info-heading">Interests</h3>
            <p className="info-text">
               Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur.
               Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
         </div>
      </div>
   );
}

export default Information;
