import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import ProductComponent from "./../product/product.component";
import { CartContext } from "./../../context/cart.context";

function ShoesComponent(props) {
  const [shoesArr, setShoesArr] = useState([]);
  const { setCart } = useContext(CartContext);
  const fetchData = async () => {
    let endpoint = "http://localhost:4000/api/shoes";
    let response = await axios.get(endpoint);
    if (response.status === 200) {
      setShoesArr(response.data);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleAddProduct = (product) => {
    setCart((prev) => [...prev, product]);
  };
  return (
    <div className="shoesContainer">
      {shoesArr.map((shoes) => {
        let { product_main_image_url, product_title, app_sale_price } = shoes;
        return (
          <ProductComponent
            title={product_title[0]}
            description={product_title}
            price={app_sale_price}
            imageUrl={product_main_image_url}
            addProduct={() => handleAddProduct(shoes)}
          ></ProductComponent>
        );
      })}
    </div>
  );
}

export default ShoesComponent;
