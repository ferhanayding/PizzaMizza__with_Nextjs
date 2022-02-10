import Image from 'next/image'
import React from 'react'
import style from "../../styles/PizzaItem.module.css"
const PizzaItem = () => {
  return (
    <div className={style.container} >
        <div className={style.img__container} >
        <Image src={"/image/pizza.png"} width="250" height={"250"} alt='ded' />
        </div>
        <div className={style.pizza___each__items_container}>
          <div className={style.wrapper} >
            <h3 className={style.title}>
              Gabriella
            </h3>
            <button className={style.order__button} >Order Now</button>
            <span className={style.price} >$19.99</span>
          </div>
            
        </div>
    </div>
  )
}

export default PizzaItem