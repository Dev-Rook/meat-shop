import React, { useState, useEffect } from "react";
import Styles from "./Styles/Landing.module.css";

import Hero from "../_Page-Sections/Hero/Hero";

import Poultry from "../../Components/Racks/Poultry";
import Beef from "../../Components/Racks/Beef";
import Pork from "../../Components/Racks/Pork";
import Mutton from "../../Components/Racks/Mutton";

const Landing = () => {
  return (
    <div className={Styles.Landing}>
      <iframe
      className={Styles.Location_Map_Iframe}
        width="90%"
        height="500"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>

      <Hero />

      <div className={Styles.Content_Container}>
        <Poultry />
        <Beef />
        <Pork />
        <Mutton />
      </div>
    </div>
  );
};

export default Landing;
