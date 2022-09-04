import React, { useState, useEffect } from "react";
import Styles from "./Styles/Sidebar.module.css";

// Material UI Icons Start
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
// Material UI Icons End

const Sidebar = () => {
  return (
    <div className={Styles.Sidebar}>
      <div className={Styles.Logo_Container}>
        <img src="" alt="" className={Styles.Logo} />
      </div>

      <ul className={Styles.Social_Icon_Container}>
        <li className={Styles.Container_Item}>
          <a href="#">
            <FacebookIcon className={Styles.Social_Icon} />
          </a>
        </li>
        <li className={Styles.Container_Item}>
          <a href="#">
            <LinkedInIcon className={Styles.Social_Icon} />
          </a>
        </li>
        <li className={Styles.Container_Item}>
          <a href="#">
            <YouTubeIcon className={Styles.Social_Icon} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
