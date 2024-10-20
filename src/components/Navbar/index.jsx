import React, { useState } from "react";
//
// icons
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiUser } from "react-icons/ci";

import Cart from "../Cart";

// styles
import styles from "./index.module.css";

const Navbar = () => {
  const [showCart, setSHowCart] = useState(false);

  const handleSHowCart = () => {
    setSHowCart(!showCart);
  };
  return (
    <>
      {showCart && <Cart handleSHowCart={handleSHowCart} />}
      <nav className={styles.container}>
        <a className={styles.nav_title} href="/">
          <img src={`images/logo.png`} />
        </a>
        <ul>
          <button>
            <CiUser className={styles.icons} />
            <span>My Profile</span>
          </button>
          <button onClick={handleSHowCart}>
            <AiOutlineShoppingCart className={styles.icons} />
            <span>Cart</span>
          </button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
