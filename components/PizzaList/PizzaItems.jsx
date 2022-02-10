import React from 'react'
import style from "../../styles/PizzaItems.module.css"
import PizzaItem from './PizzaItem'
const PizzaItems = () => {
  return (
    <div className={style.container} >
        <h5 className={style.title} >
            Most Liked
          
        </h5>
        <div className={style.wrapper}>
        <div className={style.item}>
        <PizzaItem/>
        </div>
        <div className={style.item}>
        <PizzaItem/>
        </div>
        <div className={style.item}>
        <PizzaItem/>
        </div>
        <div className={style.item}>
        <PizzaItem/>
        </div>
        <div className={style.item}>
        <PizzaItem/>
        </div>
        <div className={style.item}>
        <PizzaItem/>
        </div>
        <div className={style.item}>
        <PizzaItem/>
        </div>
        <div className={style.item}>
        <PizzaItem/>
        </div>
    
  
        </div>
        </div>
  )
}

export default PizzaItems