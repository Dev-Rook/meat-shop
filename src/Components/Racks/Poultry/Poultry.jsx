import React, { useState, useEffect } from "react";
import Styles from "./Styles/Poultry.module.css";

import Chicken from "../../Cards/Chickesn";

const Poultry = () => {
  const [productData, setProductData] = useState(Chicken);
  const [searchProduct, setSearchProduct] = useState("");
  return (
    <div className={Styles.Poultry}>
      <div className={Styles.Rack}>
        <h1 className={Styles.Title}>Chicken</h1>

        <div className={Styles.Product_Tray}>
          <div className={Styles.Filtering}>
            <input placeholder="Search.." type="text" className="Search" />
          </div>

          {productData.filter((data) => {
            return searchProduct.toLocaleLowerCase() === ""
              ? data
              : data.title.toLocaleLowerCase().includes(searchProduct);
          }).map((product) => {
            const {id, Title, Image, Description, Category} = product;

            return (
                
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Poultry;
