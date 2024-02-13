import React from "react";
const selectStyle = {
    background: `url('https://waf.barracuda.com/cui/images/formalize/select_arrow.gif') no-repeat right center`,
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
    paddingRight: '20px', // Adjust the padding to make space for the arrow image
  };

const Header = () => {
    
  return (
    <header style={{display:"flex", justifyContent:"flex-end", backgroundColor:"#223355", height:"30px",zIndex:"100"}}>
      <nav style={{backgroundColor:"#1a2640",padding:"3px 10px 5px 10px"}}>
        <select id="languageSelect" name="language"  style={{borderRadius:"3px", padding:"2px 40px 2px 0px", font:"11px Arial",marginRight:"5px",marginLeft:"4px", outline:"none" }}>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
        </select>
      </nav>
    </header>
  );
};

export default Header;
