import React, { useState, useEffect } from "react";
import Styles from "./Styles/Nav.module.css";

// Material UI Icons Start
import MenuIcon from "@mui/icons-material/Menu";
// Material UI Icons End

const Nav = () => {
  const [Nav, setNav] = useState(false);


  const hideNav = () => {
    if(window.scrollY >= 145) {
      setNav(true);
    } else {
      setNav(false);
    }
  }

  window.addEventListener("scroll", hideNav);

  return (
    <div className={`${Styles.Nav} ${Nav ? Styles.active : ""}`}>
      <h1 className={`${Styles.Brand} ${Nav ? Styles.active : ""}`}>
        Meat Shop
      </h1>

      <ul className={Styles.Navlink_Container}>
        <li className={Styles.Navlink_Item}>
          <a href="" className={Styles.Navlink}>
            Home
          </a>
        </li>
        <li className={Styles.Navlink_Item}>
          <a href="" className={Styles.Navlink}>
            Chicken
          </a>
        </li>
        <li className={Styles.Navlink_Item}>
          <a href="" className={Styles.Navlink}>
            Beef
          </a>
        </li>
        <li className={Styles.Navlink_Item}>
          <a href="" className={Styles.Navlink}>
            Pork
          </a>
        </li>
        <li className={Styles.Navlink_Item}>
          <a href="" className={Styles.Navlink}>
            Mutton
          </a>
        </li>

        <MenuIcon sx={{fontSize: 40}} className={Styles.Menu_Icon} />
      </ul>
    </div>
  );
};

export default Nav;
