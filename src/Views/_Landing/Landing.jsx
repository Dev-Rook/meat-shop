import React, { useState, useEffect } from "react";
import Styles from "./Styles/Landing.module.css";

import Poultry from "../../Components/Racks/Poultry";
import Beef from "../../Components/Racks/Beef";
import Pork from "../../Components/Racks/Pork";

const Landing = () => {
  return (
    <div className={Styles.Landing}>
      <div className={Styles.Content_Container}>
        <Poultry />
        <Beef />
        <Pork />
      </div>
    </div>
  );
};

export default Landing;
