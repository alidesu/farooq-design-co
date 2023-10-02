import { React } from "react";
import logo from "../dumps/logo-web.png"

const Navbar = () => {
  
  return (
    <div>
      <div className="main-class">
        <div className="empty"><img src={logo} alt="logo" srcset="" /></div>
        <div className="sub-class">
          

          <div className="text" style={{
            fontFamily: "Kanit",
            fontWeight: "600",
            // fontStyle: "italic",
          }}>FAROOQ DESIGN CO.</div>
        </div>
        <div>
          <button className="side-button"><span className="material-symbols-outlined">menu</span></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
