import React, { useState, useEffect } from "react";
import Styles from "./_Rack-Styles/RackStyle.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/effect-fade ";

import Chicken from "../Cards/Chicken";

const Poultry = () => {
  const [productData, setProductData] = useState(Chicken);
  const [searchProduct, setSearchProduct] = useState("");

  return (
    <div className={Styles.Container}>
      <h1 className={Styles.Title}>Chicken</h1>
      {/* <div className={Styles.Filter_Container}>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchProduct(e.target.value)}
          className={Styles.Filter}
        />
      </div> */}
      <Swiper
        speed={800}
        modules={[Navigation, FreeMode]}
        loop
        grabCursor={true}
        className={Styles.Swiper}
        breakpoints={{
          360: {
            width: 360,
            slidesPerView: 1,
            spaceBetween: 10,
          },
          380: {
            width: 380,
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          480: {
            width: 480,
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          768: {
            width: 768,
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // 1500: {
          //   width: 1500,
          //   slidesPerView: 3,
          //   spaceBetween: 10,
          // },
          1920: {
            width: 1920,
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
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
              const { id, Title, Image, Description, Category, Price } = product;

              return (
                <SwiperSlide className={Styles.Slide}>
                  <div className={Styles.Card} key={id}>
                    <div className={Styles.Display_Image_Container}>
                      <h3 className={Styles.Card_Title}>{Title}</h3>
                      <img src={Image} alt="" className={Styles.Display_image} />
                    </div>

                    <div className={Styles.Card_Details}>
                      <p className={Styles.Description}>{Description}</p>

                      <div className={Styles.Recipe__Button}>
                      <a href="#" className={Styles.Price}>
                          {Price}
                        </a>

                        <button className={Styles.Order}>Order</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </div>
      </Swiper>
    </div>
  );
};

export default Poultry;
