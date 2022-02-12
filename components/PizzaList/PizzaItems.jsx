import React from 'react'
import style from "../../styles/PizzaItems.module.css"
import PizzaItem from './PizzaItem'
const PizzaItems = ({pizzaList}) => {
  return (
    <div className={style.container} >
        <h5 className={style.title} >
            Most Liked
          
        </h5>
        <div className={style.wrapper}>
           {pizzaList.map((pizza)=>(
            <div className={style.item} key={pizza._id} >
        <PizzaItem pizza={pizza} />
        </div>
          ))} 
       
    
  
        </div>
        </div>
  )
}

export default PizzaItems