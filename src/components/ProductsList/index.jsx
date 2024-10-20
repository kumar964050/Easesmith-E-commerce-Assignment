import { useEffect, useState } from "react";
// context
import { useCart } from "../../context/Cart";

import data from "../../assets/data";

// icons
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
// styles
import styles from "./index.module.css";

const url =
  "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__";

const Product = ({ id, data }) => {
  const { cart, addItem, removeItem } = useCart();
  const [wishList, setWishList] = useState(false);
  const key = `wish_list_${id}`;

  const addInCartItem = () => {
    addItem(id);
  };
  const removeInCartItem = () => {
    removeItem(id);
  };

  const addRemoveFromWishList = () => {
    if (wishList) {
      setWishList(false);
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(true));
      setWishList(true);
    }
  };

  const alreadyAdded = cart.find((item) => item.id === id);
  const img_url = "plant.jpeg";

  useEffect(() => {
    const storedWishList = localStorage.getItem(key);
    if (storedWishList) {
      setWishList(true);
    } else {
      setWishList(false);
    }
  }, []);

  return (
    <div className={styles.product}>
      {/* img */}
      <div className={styles.product_img_section}>
        {wishList ? (
          <FaHeart
            size={20}
            color="red"
            onClick={addRemoveFromWishList}
            className={`${styles.icons} ${styles.wishList_icon}`}
          />
        ) : (
          <CiHeart
            onClick={addRemoveFromWishList}
            className={`${styles.icons} ${styles.wishList_icon}`}
          />
        )}

        <img src={`images/${img_url}`} />
        <span>View Product</span>
      </div>
      {/*  */}
      <div className={styles.product_details_section}>
        <h2>{data.plant_title}</h2>
        <small>{data.plant_description}</small>
        {/* stars */}
        <div className={styles.icons_container}>
          <IoIosStar className={`${styles.icons} ${styles.star_icon}`} />
          <IoIosStar className={`${styles.icons} ${styles.star_icon}`} />
          <IoIosStar className={`${styles.icons} ${styles.star_icon}`} />
          <IoIosStar className={`${styles.icons} ${styles.star_icon}`} />
          <IoIosStar className={`${styles.icons} ${styles.star_icon}`} />{" "}
          {data.rating}
        </div>
        {/* price */}
        <div className={styles.price_container}>
          <span>
            <del>₹{data.listing_price}</del> ₹{data.sell_price}
          </span>
        </div>
        {/*  */}
        <div className={styles.action_container}>
          <div>
            <button onClick={removeInCartItem}>-</button>
            <span>{alreadyAdded ? alreadyAdded?.quantity : "Add to Cart"}</span>
            <button onClick={addInCartItem}>+</button>
          </div>
          <button>Buy on Rent</button>
        </div>
      </div>
    </div>
  );
};

const ProductsList = () => {
  const [sort, setSort] = useState("");
  return (
    <>
      <div className="sort_container">
        <span>300 products</span>
        <button>Sort By </button>
      </div>
      <section className={styles.container}>
        {data.map((each, index) => (
          <Product key={index} id={index} data={each} />
        ))}
      </section>
    </>
  );
};

export default ProductsList;
