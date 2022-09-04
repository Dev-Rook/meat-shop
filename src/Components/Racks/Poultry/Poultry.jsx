import React, { useState, useEffect } from "react";
import Styles from "./Styles/Poultry.module.css";

import Chicken from "../../Cards/Chicken";

const Poultry = () => {
  const [productData, setProductData] = useState(Chicken);
  const [searchProduct, setSearchProduct] = useState("");
  const [visible, setVisible] = useState(3);

  const loadMore = () => {
    setVisible((prev) => prev + 3)
  }

  return (
    <div className={Styles.Poultry}>
      <h1 className={Styles.Title}>Chicken</h1>
      <div className={Styles.Rack}>
        <div className={Styles.Filtering}>
          <input placeholder="Search.." type="text" className="Search" />

          <button onClick={loadMore}>More</button>
        </div>
        <div className={Styles.Product_Tray}>
          {productData.slice(0, visible)
            .filter((data) => {
              return searchProduct.toLocaleLowerCase() === ""
                ? data
                : data.Title.toLocaleLowerCase().includes(searchProduct);
            })
            .map((product) => {
              const { id, Title, Image, Description, Category } = product;

              return <div className={Styles.Card} key={id}>
                <h3 className={Styles.Card_Title}>{Title}</h3>
                <div className={Styles.Display_Image_Container}>
                  <img src="" alt="" className={Styles.Display_image} />
                </div>

                <p className={Styles.Description}>{Description}</p>

                <div className={Styles.Recipe__Button}>
                  <a href="#" className={Styles.RecipeLink}>Recipe</a>

                  <button className={Styles.Order}>
                    Order
                  </button>
                </div>
              </div>;
            })}
        </div>
      </div>
    </div>
  );
};

export default Poultry;
