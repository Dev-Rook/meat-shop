import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Styles from "./Styles/Nav.module.css";

// Material UI Icons Start
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SearchIcon from "@mui/icons-material/Search";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
// Material UI Icons End

const Nav = () => {
  // const [Nav, setNav] = useState(false);
  const [toogleSideBar, setToogleSideBar] = useState(false);

  const toggleSB = () => {
    setToogleSideBar((prev) => !prev);
  };


  // const hideNav = () => {
  //   if(window.scrollY >= 145) {
  //     setNav(true);
  //   } else {
  //     setNav(false);
  //   }
  // }

  // window.addEventListener("scroll", hideNav);


  // {`${Styles.Nav} ${Nav ? Styles.active : ""}`}

  return (
    <div className={Styles.Nav}>
      <h1 className={`${Styles.Brand} ${Nav ? Styles.active : ""}`}>
        Meat Shop
      </h1>

      <ul className={Styles.Navlink_Container}>
        <li className={Styles.Navlink_Item}>
          <Link to={"/"} className={Styles.Navlink}>
            Home
          </Link>
        </li>
        <li className={Styles.Navlink_Item}>
          <Link to={"PoultryPage"} className={Styles.Navlink}>
            Chicken
          </Link>
        </li>
        <li className={Styles.Navlink_Item}>
          <Link to={"BeefPage"} className={Styles.Navlink}>
            Beef
          </Link>
        </li>
        <li className={Styles.Navlink_Item}>
          <Link to={"PorkPage"} className={Styles.Navlink}>
            Pork
          </Link>
        </li>
        <li className={Styles.Navlink_Item}>
          <Link to={"MuttonPage"} className={Styles.Navlink}>
            Mutton
          </Link>
        </li>

        <MenuIcon sx={{fontSize: 40}} onClick={toggleSB} className={Styles.Menu_Icon} />
      </ul>




      <div
        className={`${Styles.Mobile__Menu} ${
          toogleSideBar ? Styles.ToggleMenu : ""
        }`}
      >
        <CloseIcon className={Styles.CloseIcon} onClick={toggleSB} />
        <LocalMallIcon className={Styles.MerchIcon} />

        <h1 className={Styles.Mobile_Brand}>Marina Palms</h1>

        <ul className={Styles.MobileLinks_Container}>
          <li className={Styles.MobileLink_Item}>
            <a href="#" className={Styles.MobileLink}>
              Home
            </a>
          </li>
          <li className={Styles.MobileLink_Item}>
            <a href="#" className={Styles.MobileLink}>
              Visit
            </a>
          </li>
          <li className={Styles.MobileLink_Item}>
            <a href="#" className={Styles.MobileLink}>
              Sailing
            </a>
          </li>
          <li className={Styles.MobileLink_Item}>
            <a href="#" className={Styles.MobileLink}>
              Fishing
            </a>
          </li>
          <li className={Styles.MobileLink_Item}>
            <a href="#" className={Styles.MobileLink}>
              Contact
            </a>
          </li>

          <div className={Styles.Mobile_Search_Container}>
            <SearchIcon className={Styles.SearchIcon} />
            <input
              placeholder="Search..."
              type="text"
              className={Styles.Search}
            />
          </div>

          <div className={Styles.Social_Icon_Bar}>
            <div className={Styles.Social_Icon}>
              {/* <img
                src={require("../../Assets/Icons/Twitter-Icon.png")}
                alt=""
                className={Styles.SocialIcon}
              /> */}
            </div>
            <div className={Styles.Social_Icon}>
              {" "}
              {/* <img
                src={require("../../Assets/Icons/Facebook-Icon.png")}
                alt=""
                className={Styles.SocialIcon}
              /> */}
            </div>
            <div className={Styles.Social_Icon}>
              {" "}
              {/* <img
                src={require("../../Assets/Icons/Instagram-Icon.png")}
                alt=""
                className={Styles.SocialIcon}
              /> */}
            </div>
            <div className={Styles.Social_Icon}>
              {" "}
              {/* <img
                src={require("../../Assets/Icons/YouTube-Icon.png")}
                alt=""
                className={Styles.SocialIcon}
              /> */}
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
