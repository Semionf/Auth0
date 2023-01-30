import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import ProductComponent from "./../product/product.component";
import axios from "axios";

import { CartContext } from "../../context/cart.context";
function TshirtComponent(props) {
  const [tshirtArr, setTshirtArr] = useState([]);
  const { setCart } = useContext(CartContext);
  const fetchData = async () => {
    let endpoint = "http://localhost:4000/api/tshirts";
    let response = await axios.get(endpoint);
    if (response.status === 200) {
      setTshirtArr(response.data);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleAddProduct = (product) => {
    setCart((prev) => [...prev, product]);
  };
  return (
    <div className="tshirtContainer">
      {tshirtArr.map((tshirt) => {
        let { product_main_image_url, product_title, app_sale_price } = tshirt;
        return (
          <ProductComponent
            title={product_title[0]}
            description={product_title}
            price={app_sale_price}
            imageUrl={product_main_image_url}
            addProduct={() => handleAddProduct(tshirt)}
          ></ProductComponent>
        );
      })}
    </div>
  );
}

export default TshirtComponent;
