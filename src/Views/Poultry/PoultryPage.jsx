import React, { useState, useEffect } from "react";
import Styles from "./Styles/PoultryPage.module.css";

import Poultry from "../../Components/Racks/Poultry";

const PoultryPage = () => {
  return (
    <div className={Styles.PoultryPage}>
      <div className={Styles.Content_Container}>
        <Poultry />
      </div>
    </div>
  );
};

export default PoultryPage;
