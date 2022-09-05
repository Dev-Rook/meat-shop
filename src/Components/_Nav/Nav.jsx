import React, { useState, useEffect } from "react";
import Styles from "./Styles/Nav.module.css";

// Material UI Icons Start
import MenuIcon from "@mui/icons-material/Menu";
// Material UI Icons End

const Nav = () => {
  const [brand, setBrand] = useState(false);


  const hideBrand = () => {
    if(window.scrollY >= 100) {
      setBrand(true);
    } else {
      setBrand(false);
    }
  }

  window.addEventListener("scroll", hideBrand);

  return (
    <div className={Styles.Nav}>
      <h1 className={`${Styles.Brand} ${brand ? Styles.active : ""}`}>
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
