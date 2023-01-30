import React, { useContext } from "react";
import { CartContext } from "./../../context/cart.context";
import ProductComponent from "./../product/product.component";
import "./style.css";
function CartComponent(props) {
  const { cart } = useContext(CartContext);
  console.log("current cart items", cart);
  return (
    <div className="mynice-cart">
      {cart &&
        cart.length > 0 &&
        cart.map((tshirt) => {
          let { product_main_image_url, product_title, app_sale_price } =
            tshirt;
          return (
            <ProductComponent
              title={product_title[0]}
              description={product_title}
              price={app_sale_price}
              imageUrl={product_main_image_url}
            ></ProductComponent>
          );
        })}
    </div>
  );
}

export default CartComponent;
