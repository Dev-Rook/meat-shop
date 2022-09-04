import React, { useState, useEffect } from "react";
import Styles from "./Styles/Landing.module.css";

import Poultry from "../../Components/Racks/Poultry/Poultry";

const Landing = () => {
  return <div className={Styles.Landing}>
    <Poultry />
  </div>;
};

export default Landing;
