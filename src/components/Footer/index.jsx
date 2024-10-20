// icons
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaSquareThreads } from "react-icons/fa6";

// styles
import styles from "./index.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      {/* 1 */}
      <section className={styles.section_1}>
        <div>
          <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
          <p>
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
            necesbus enim
          </p>
          <input placeholder="Enter Your Email." />
          <button>SUBSCRIBE</button>
        </div>
        <div>
          <h3>ABOUT US</h3>
          <span>Our Story</span>
          <span>Blog</span>
          <span>Careers</span>
          <span>Contact us</span>
          <span>Help & Support</span>
        </div>
        <div>
          <h3>OUR SERVICES</h3>
          <span>Book Maali</span>
          <span>Plant day care</span>
          <span>Rent Plants</span>
          <span>Plants & pots</span>
          <span>Gardening Tools</span>
        </div>
        <div>
          <h3>USEFUL LINKS</h3>
          <span>My Account</span>
          <span>Orders & returns</span>
          <span>Track Orders</span>
          <span>Terms & conditions</span>
          <span>Privacy Policy</span>
          <span>Return , Refund & Replacement Policy</span>
        </div>
        <div>
          <h3>GET IN TOUCH </h3>
          <span>Address L f-262, first floor,</span>
          <span>Sushant Lok phase-lll,</span>
          <span>sector -57, Gurgoan,</span>
          <span>Haryana, India 122003</span>
          <br />
          <span>Call : +919999989898</span>
          <span>Email: care@chaperoneplants.com</span>
        </div>
      </section>
      {/* 2 */}
      <section className={styles.section_2}>
        <h3>CHAPERONE</h3>
        <p>
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
          necessitatibus enim ut internos accusantium a numquam autem ab rerum
          omnis. Non molestiae ratione et laborum doloribus aut molestiae
          voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
          est voluptatem eius. Et architecto nihil id labore omnis hic iste
          deleniti et porro aspernatur.
        </p>
        <h3>Follow us on</h3>
        <div className={styles.section_2_icon_container}>
          <FaInstagram className={styles.icons} />
          <CiFacebook className={styles.icons} />
          <FaSquareThreads className={styles.icons} />
          <FaYoutube className={styles.icons} />
          <FaLinkedin className={styles.icons} />
        </div>
      </section>
      {/* 3 */}
      <section className={styles.copy_right_section}>
        <p>&copy;2023, chaperone.com All rights reserved.</p>
      </section>
    </footer>
  );
};

export default Footer;
