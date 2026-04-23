import React from "react";
import redcross from "../Assets/Red Cross, White Circle.jpg"
import Scouts from "../Assets/scouts.jpg"
import Debates from "../Assets/Debates.jpg"
import Journalism from "../Assets/Journalism.jpg"


function Social() {
  return (
    <>
    <body>
      <div className="social-groups">
        <img src={Journalism} alt="red" className="socialicon"></img>
        <p>Journalism Club</p>
        <button>JOIN</button>
      </div>

      <div className="social-groups">
        <img src={Debates} alt="red" className="socialicon"></img>
        <p>Debates Club</p>
        <button>JOIN</button>
      </div>

      <div className="social-groups">
        <img src={Scouts} alt="red" className="socialicon"></img>
        <p>Scouts Movement Club</p>
        <button>JOIN</button>
      </div>

      <div className="social-groups">
        <img src={redcross} alt="red" className="socialicon"></img>
        <p>Red Cross Club</p>
        <button>JOIN</button>
      </div>
      <div className="social-groups">
        <img src={redcross} alt="red" className="socialicon"></img>
        <p>Red Cross Club</p>
        <button>JOIN</button>
      </div>
    </body>
    </>
  );
}

export default Social;
