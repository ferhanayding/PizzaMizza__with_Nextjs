import React from 'react'
import style from "../styles/PizzaList.module.css"
import PizzaItems from './PizzaList/PizzaItems'

const PizzaList = ({pizzaList}) => {
  return (
    <div className={style.container}>
      <h1 className={style.pizza__list_title}>
      THE BEST PIZZA IN TOWN 
      </h1>
      <p className={style.pizza__list_desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem expedita non quibusdam sed mollitia nam corrupti delectus praesentium nobis quidem!</p>  
    <div className={style.wrapper}>
  
      <PizzaItems pizzaList={pizzaList} />
    </div>
    </div>
  )
}

export default PizzaList