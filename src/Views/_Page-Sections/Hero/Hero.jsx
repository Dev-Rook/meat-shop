import React, { useState, useEffect } from "react";
import Styles from "./Styles/Hero.module.css";
const Hero = () => {
  return (
    <div className={Styles.Hero}>
        <h1 className={Styles.Slogan}>
            Quality Meats Picked Up or Delivered
        </h1>
    </div>
  )
}

export default Hero