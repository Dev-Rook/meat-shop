const Chicken = [
    {
        id: 1,
        Image: "",
        Title: "1 Chicken",
        Description: "One whole chicken. Defeathered and packaged",
        Category: "Whole Ckicken",
    },
    {
        id: 2,
        Image: "",
        Title: "Cut-Up",
        Description: "",
        Category: "Whole Ckicken",
    },
    {
        id: 3,
        Image: "",
        Title: "Minced",
        Description: "",
        Category: "Whole Ckicken",
    },
    {
        id: 4,
        Image: "",
        Title: "Legs",
        Description: "",
        Category: "Part",
    },
    {
        id: 5,
        Image: "",
        Title: "Wings",
        Description: "",
        Category: "Part",
    },
    {
        id: 6,
        Image: "",
        Title: "Thighs",
        Description: "",
        Category: "Part",
    },
]

export default Chicken









{/* <div className={Styles.Poultry}>
<h1 className={Styles.Title}>Chicken</h1>
<div className={Styles.Rack}>
  <div className={Styles.Filtering}>
    <input placeholder="Search.." type="text" className="Search" />

    <button onClick={loadMore}>More</button>
  </div>
  <div className={Styles.Product_Tray}>
    {productData
      .slice(0, visible)
      .filter((data) => {
        return searchProduct.toLocaleLowerCase() === ""
          ? data
          : data.Title.toLocaleLowerCase().includes(searchProduct);
      })
      .map((product) => {
        const { id, Title, Image, Description, Category } = product;

        return (
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
        );
      })}
  </div>
</div>
</div> */}