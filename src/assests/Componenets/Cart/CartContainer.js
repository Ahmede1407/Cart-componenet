import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "../../Context/context";

const CartContainer = () => {
  const { cart } = useGlobalContext();

  if (cart.leanght === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>

      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>

      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>$0.00</span>
          </h4>
        </div>

        <button
          className="btn clear-btn"
          onClick={() => console.log("cleared")}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
