import Image from 'next/image'
import React from 'react'
import styles from "../styles/Cart.module.css"
const Cart = () => {
  return (
    <div className={styles.container}  >
       <div className={styles.left__container}>
        <table className={styles.table} >
            <tr className={styles.tr__titles} >
            <th className={styles.th} >Product</th>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Extras</th>
            <th className={styles.th}>Price</th>
            <th className={styles.th}>Quantity</th>
            <th className={styles.th} >Total</th>
            </tr>
            {/* ---------------------- */}
        { new Array(3).fill(

            <tr  className={styles.tr__product} >
                <td className={styles.product__td}>
                    <div className={styles.img__container_td}>
                    <Image
                  src="/image/pizza.png"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                  />
                    </div>
                </td>
                <td className={styles.product__td}>
                <span className={styles.name}>CORALZO</span>
                </td>
                <td className={styles.product__td}>
                <div className={styles.extras}>
                    <button className={styles.extras__button}>See</button>
                    <div className={styles.extras__drowdown} >
                    <span>
                Double ingredient
                    </span>
                <span>
                 spicy sauce
                </span>
                    </div>
              </div>
                </td>
                <td className={styles.product__td}>
                <span className={styles.price}>$19.90</span>
                </td>
                <td className={styles.product__td}>
                <span className={styles.quantity}>2</span>
                </td>
                <td className={styles.product__td}>
                <span className={styles.total}>$39.80</span>
                </td>
                
            </tr>
                )  
            }
            {/* -------------------------- */}
        </table>
       </div>
       <div className={styles.right__container}>
           <div className={styles.right__wrapper}>
               {/* <h1 className={styles.cart__title}>CART TOTAL</h1> */}
                <div className={styles.cart__items}>
                <span>Subtotal:</span>
                <span>$79.44</span>
                    </div>
                <div className={styles.cart__items}>
                <span>Discount:</span>
                <span>$0</span>
                    </div>
                <div className={styles.cart__items}>
                <span>Total:</span>
                <span>$79.44</span>
                    </div>
                <div className={styles.cart__button_container}>
                <button>Check!</button>
                    </div>
            
                
           </div>
       </div>
    </div>
  )
}

export default Cart