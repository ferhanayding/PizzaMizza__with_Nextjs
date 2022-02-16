import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/cartSlice";
import styles from "../../styles/Product.module.css";
import api from "../../utils/api/api";
const Product = ({ pizza }) => {
  const [price, setPrice] = useState(pizza.prices[0]);
  const [size, setSize] = useState(0);
  const [pizzaQuantity, setPizzaQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();
  // console.log(extras);
  const handleSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };
  const changePrice = (number) => {
    setPrice(price + number);

    // console.log(price);
  };
  const handleChange = (e, option) => {
    const checked = e.target.checked;
    // console.log(checked);
    if (checked) {
      changePrice(option.price);
      setExtras([...extras, option]);
      // setExtras(prev => [...prev,extra]) buda olur
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };
  const onClick = () => {
    dispatch(addProduct({ ...pizza, price, size, pizzaQuantity, extras }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.left__container}>
        <div className={styles.img__container}>
          <Image src={pizza.img} layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className={styles.right__container}>
        <h1 className={styles.right__title}>{pizza.title}</h1>
        <div className={styles.right__wrapper}>
          <div className={styles.items}>
            <span className={styles.price}>${price}</span>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, aperiam?
            </p>
          </div>
          {/* **************************** * img * */}
          <div className={styles.items}>
            <span className={styles.item}>Choose the size</span>
            <div className={styles.size__container}>
              <div
                className={styles.size__img_container}
                onClick={() => handleSize(0)}
              >
                <Image
                  src={"/image/size.png"}
                  layout="fill"
                  objectFit="contain"
                  alt="pizza"
                />
              </div>
              <div
                className={styles.size__img_container}
                onClick={() => handleSize(1)}
              >
                <Image
                  src={"/image/size.png"}
                  layout="fill"
                  objectFit="contain"
                  alt="pizza"
                />
              </div>
              <div
                className={styles.size__img_container}
                onClick={() => handleSize(2)}
              >
                <Image
                  src={"/image/size.png"}
                  layout="fill"
                  objectFit="contain"
                  alt="pizza"
                />
              </div>
            </div>
          </div>
          {/* ***************************** */}
          <div className={styles.items}>
            <span className={styles.item}>Choose addinational ingredients</span>
            {/* ------------------------------------ option */}
            <div className={styles.checkbox__container}>
              {pizza.extraOptions.map((option) => (
                <div className={styles.option__item} key={option._id}>
                  <input
                    type="checkbox"
                    id={option.text}
                    name={option.text}
                    className={styles.checkbox}
                    onChange={(e) => handleChange(e, option)}
                  />
                  <label htmlFor="double" className={styles.label}>
                    {option.text}
                  </label>
                </div>
              ))}
            </div>
            {/* ----------------------------------- */}
          </div>
          <div className={styles.finish__input}>
            <input
              onChange={(e) => setPizzaQuantity(e.target.value)}
              type="number"
              defaultValue={1}
              className={styles.quantity__input}
            />
            <Link href={"/cart"}>
              <button className={styles.button} onClick={onClick}>
                Add To Card
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
export const getServerSideProps = async ({ params }) => {
  const { data } = await api()(`/products/${params.id}`);
  // console.log(data);
  return {
    props: {
      pizza: data,
    },
  };
};
