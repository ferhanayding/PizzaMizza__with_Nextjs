import Image from "next/image";
import React, { useState } from "react";
import styles from "../../styles/Product.module.css";
const Product = () => {
  const [size, setSize] = useState(0);
  const [pizzaQuantity, setPizzaQuantity] = useState(1);

  const pizza = {
    id: 1,
    img: "/image/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left__container}>
        <div className={styles.img__container}>
          <Image src={pizza.img} layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className={styles.right__container}>
        <h1 className={styles.right__title}>{pizza.name}</h1>
        <div className={styles.right__wrapper}>
          <div className={styles.items}>
            <span className={styles.price}>
              {(pizzaQuantity * pizza.price[size]).toFixed(2)}
            </span>
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
                onClick={() => setSize(0)}
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
                onClick={() => setSize(1)}
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
                onClick={() => setSize(2)}
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
              <div className={styles.option__item}>
                <input
                  type="checkbox"
                  id="double"
                  name="double"
                  className={styles.checkbox}
                />
                <label htmlFor="double" className={styles.label}>
                  Double Ingredients
                </label>
              </div>
              <div className={styles.option__item}>
                <input
                  type="checkbox"
                  id="double"
                  name="double"
                  className={styles.checkbox}
                />
                <label htmlFor="double" className={styles.label}>
                  Extra Cheese
                </label>
              </div>
              <div className={styles.option__item}>
                <input
                  type="checkbox"
                  id="double"
                  name="double"
                  className={styles.checkbox}
                />
                <label htmlFor="double" className={styles.label}>
                  Spicy Saurce
                </label>
              </div>
              <div className={styles.option__item}>
                <input
                  type="checkbox"
                  id="double"
                  name="double"
                  className={styles.checkbox}
                />
                <label htmlFor="double" className={styles.label}>
                  Garlic Saurce
                </label>
              </div>
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
            <button className={styles.button}>Add To Card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
