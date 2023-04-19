import "../Header.css";
import * as React from "react"




function Header({handleThemeClick, isLightTheme}) {
  function themeoptions(lightoption, darkoption) {
    if (isLightTheme) {
      return lightoption
    } else {return darkoption} 
  }
  const lightlogo = "https://static.wixstatic.com/media/b10a22_07853f61baca46919b5fcbaaad23ba56~mv2.png/v1/fill/w_228,h_228,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b10a22_07853f61baca46919b5fcbaaad23ba56~mv2.png"
  const darklogo = "https://static.wixstatic.com/media/b10a22_990de28835a84a3cb34d4db480d9f5d3~mv2.png/v1/fill/w_228,h_228,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2.png"

const lightlamp = "https://static.wixstatic.com/media/b10a22_830e886be9be41bbb676112bbbddecd2~mv2.png/v1/fill/w_106,h_106,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/games%20(3).png"
const darklamp = "https://static.wixstatic.com/media/b10a22_8ad621c616014b01a14bba4b71ef8fd5~mv2.png/v1/fill/w_106,h_106,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b10a22_8ad621c616014b01a14bba4b71ef8fd5~mv2.png"


  return <section className={themeoptions("Header", "HeaderDark")}>
        <div>
        <img src={themeoptions(lightlogo, darklogo)} />
        </div>
        <div className="headermaterials">
        <button onClick={handleThemeClick} type="button" className="lamp">
            <img src={themeoptions(lightlamp, darklamp)} alt="lamp button to toggle light and dark theme" />
        </button>
        </div>
        </section>
        
  
  
}

export default Header;
