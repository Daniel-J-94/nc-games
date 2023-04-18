
import * as React from "react"
import { TextField } from "@mui/material"



function LogIn() {
  return <section className="logInContainer">
        <div>
            <form className="logInForm">
            <h1>log in:</h1>
            <TextField id="outlined-basic" label="Username" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <br></br>
            <button type="submit">SUBMIT</button>
            <br></br>
        </form>
        </div>
        </section>
        
  
  
}

export default LogIn;
