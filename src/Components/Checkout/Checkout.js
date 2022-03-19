import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import CheckoutProducts from "../CheckoutProducts/CheckoutProducts";
import { useStateValue } from "../../StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout_container">
      <div className="checkout_left">
        <img
          className="checkout_left_ad"
          src="/images/checkout_ad.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout_left_title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProducts
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right_info">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
