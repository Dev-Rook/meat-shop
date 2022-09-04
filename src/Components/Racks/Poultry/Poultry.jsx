import React, { useState, useEffect } from "react";
import Styles from "./Styles/Poultry.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/effect-fade ";

import Chicken from "../../Cards/Chicken";

const Poultry = () => {
  const [productData, setProductData] = useState(Chicken);
  const [searchProduct, setSearchProduct] = useState("");
  // const [visible, setVisible] = useState(6);

  // const loadMore = () => {
  //   setVisible((prev) => prev + 3);
  // };

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      speed={800}
      modules={[Navigation]}
      // slidesPerView={1}
      loop
      className={Styles.Swiper}
    >
      <div className={Styles.Product_Tray}>
        {productData
          // .slice(0, visible)
          .filter((data) => {
            return searchProduct.toLocaleLowerCase() === ""
              ? data
              : data.Title.toLocaleLowerCase().includes(searchProduct);
          })
          .map((product) => {
            const { id, Title, Image, Description, Category } = product;

            return (
              <SwiperSlide className={Styles.Slide}>
                <div className={Styles.Card} key={id}>
                  <div className={Styles.Display_Image_Container}>
                    <h3 className={Styles.Card_Title}>{Title}</h3>
                    <img src="" alt="" className={Styles.Display_image} />
                  </div>

                  <div className={Styles.Card_Details}>
                    <p className={Styles.Description}>{Description}</p>

                    <div className={Styles.Recipe__Button}>
                      <a href="#" className={Styles.RecipeLink}>
                        Recipe
                      </a>

                      <button className={Styles.Order}>Order</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </div>
      {/* <SwiperSlide className={Styles.Slide}>
        
      </SwiperSlide>
      <SwiperSlide className={Styles.Slide}></SwiperSlide>
      <SwiperSlide className={Styles.Slide}></SwiperSlide> */}
      ...
    </Swiper>
  );
};

export default Poultry;
