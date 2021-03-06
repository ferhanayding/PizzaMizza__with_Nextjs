import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from "../styles/Navbar.module.css"
const Navbar = () => {
   const {quantity} = useSelector(state => state.cart)
  return <div className={styles.container} >
    <div className={styles.wrapper} >
      <div className={styles.left__container}>
     <div className={styles.img__container}>
      <Image src="/image/telephone.png" alt="cef" width="32" height="32" />
     </div>
     <div className={styles.img__container_right}>
       <p>ORDER NOW!</p>
       <span>012 505 55 55</span>
     </div>
   
      </div>
      <div className={styles.center__container}>
        <ul>
          <Link href={"/"} >
          <li>Home</li>
          </Link>
          <li>Products</li>
          <li>Menu</li>
          <Link href={"/"}>
          <h1>D-jango</h1>
          </Link>
          <li>Events</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className={styles.right__container}>
          <Link href="/cart">
        <div className={styles.right__wrapper}>
          <Image src="/image/cart.png" alt="" height={"32"} width="32" />
        <span className={styles.right__badge} >{quantity}</span>
        </div>
          </Link>
      </div>
    </div>
      </div>;
};

export default Navbar;
