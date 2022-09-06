import React, { useState, useEffect } from "react";
import Styles from "./Styles/PoultryPage.module.css";

import Poultry from "../../Components/Racks/Poultry";

const PoultryPage = () => {
  return (
    <div className={Styles.PoultryPage}>
      <Poultry />
    </div>
  );
};

export default PoultryPage;
