// icons

import { IoIosClose } from "react-icons/io";

// styles

import styles from "./index.module.css";

const CartItem = () => {
  return (
    <div className={styles.cart_item}>
      <div className={styles.image_section}>
        <img src="images/plant.jpeg" alt="Product" />
        <button disabled className={styles.qnt_btn}>
          Qnt:1
        </button>
      </div>
      <div className={styles.details_section}>
        <h3>title</h3>
        <p>description</p>
        {/* stars */}
        {/* <div>4.5</div> */}
        {/* price */}
        <div>
          <span>$200 </span>
          <span>
            <del> $565</del>
          </span>
        </div>
        <p>Delivery By tie oct 22 || FREE Delivery</p>
        <div>
          <button>remove</button>
          <button disabled>save for later</button>
        </div>
      </div>
    </div>
  );
};

const Cart = ({ handleSHowCart }) => {
  return (
    <section className={styles.container}>
      <div className={styles.cart_header}>
        <span>Your Cart</span>
        <button className={styles.close_btn} onClick={handleSHowCart}>
          <IoIosClose className={styles.icons} />
        </button>
      </div>
      <div className={styles.cart_body}>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <div className={styles.cart_footer}>
          <h3>Price Details</h3>
          <div>
            <span>Price(0 items)</span>
            <span>$909</span>
          </div>
          <div>
            <span>Discount</span>
            <span>$909</span>
          </div>
          <div>
            <span>Delivery Charges</span>
            <span>FREE Delivery</span>
          </div>
          <div>
            <span>Total Amount</span>
            <span>$9090</span>
          </div>
          <div>
            <small>you will save 300 on this order</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
