import "../Header.css";
import * as React from "react"
import { useState } from "react";
import { Switch }from "@mui/material";
import { TextField } from "@mui/material"



function Header({handleThemeClick, isLightTheme}) {
  function themecss(lightname, darkname) {
    if (isLightTheme) {
      return lightname
    } else {return darkname}
  }
  return <section className={themecss("Header", "HeaderDark")}>
        <div>
        <img src="https://static.wixstatic.com/media/b10a22_07853f61baca46919b5fcbaaad23ba56~mv2.png/v1/fill/w_228,h_228,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b10a22_07853f61baca46919b5fcbaaad23ba56~mv2.png" />
        </div>
        <div className="headermaterials">
        <button onClick={handleThemeClick} type="button" className="lamp">
            <img src="https://static.wixstatic.com/media/b10a22_830e886be9be41bbb676112bbbddecd2~mv2.png/v1/fill/w_106,h_106,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/games%20(3).png" alt="lamp button to toggle light and dark theme" />
        </button>
        </div>
        </section>
        
  
  
}

export default Header;
