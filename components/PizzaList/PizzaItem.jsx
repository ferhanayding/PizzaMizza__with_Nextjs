import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from "../../styles/PizzaItem.module.css"
import { truncate } from '../../utils/function'
const PizzaItem = ({pizza}) => {
// console.log(pizza)

  return (
    <div className={style.container} >
      <Link href={`/product/${pizza._id}`} >
      <div className={style.left__container} >

        <div className={style.img__container} >
        <Image src={pizza.img} width="250" height={"250"} alt='ded' />
        </div>
        <div className={style.pizza___each__items_container}>
          <div className={style.wrapper} >
      
            <h3 className={style.title}>
              {pizza.title}
            </h3>
            <span className={style.price} >$ {pizza.prices[0]}</span>
            <p>{truncate(pizza?.desc,15)}</p>
          </div>
        </div>
      </div>
      </Link>
        <div className={style.mobile} >
        <h3 className={style.mobile__title}>
        {pizza.title}
            </h3>
           
            <span className={style.mobile__price} >$ {pizza?.prices[0]}</span>
        </div>
    </div>
  )
}

export default PizzaItem