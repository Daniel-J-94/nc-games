import "../Header.css";
import * as React from "react"
import { useState } from "react";
import { Switch }from "@mui/material";
import { TextField } from "@mui/material"



function Header() {
  return <section className="Header">
        <div>
        <img src="https://static.wixstatic.com/media/b10a22_07853f61baca46919b5fcbaaad23ba56~mv2.png/v1/fill/w_228,h_228,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b10a22_07853f61baca46919b5fcbaaad23ba56~mv2.png" />
        </div>
        <div className="headermaterials">
        <div className="switch">
            <img src="https://static.wixstatic.com/media/b10a22_5ba4c446b0634e148c2300db046621cb~mv2.png/v1/fill/w_78,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/games%20(2).png" />
            <Switch defaultChecked />
        </div>
        <div>
            <form className="logIn">
            <h1>log in:</h1>
            <TextField id="outlined-basic" label="Username" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <br></br>
            <button type="submit">SUBMIT</button>
            <br></br>
        </form>
        </div>
        </div>
        </section>
        
  
  
}

export default Header;
