import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from "../styles/Cart.module.css"
const Cart = () => {
    const cart = useSelector(state=> state.cart)
    const {products,quantity,total} = cart
    console.log(products)
    console.log(quantity)

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
           
        {   
            products.map((product)=>(

                <tr  className={styles.tr__product} >
                <td className={styles.product__td}>
                    <div className={styles.img__container_td}>
                    <Image
                  src={product.img}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                  />
                    </div>
                </td>
                <td className={styles.product__td}>
                <span className={styles.name}>{product.title}</span>
                </td>
                <td className={styles.product__td}>
                <div className={styles.extras}>
                    <button className={styles.extras__button}>See</button>
                    <div className={styles.extras__drowdown} >
                  {product.extras.map((item)=>(
                      <span key={item._id} >
                     {item.text}
                    </span>
                        ))}
               
                    </div>
              </div>
                </td>
                <td className={styles.product__td}>
                <span className={styles.price}>${product.price}</span>
                </td>
                <td className={styles.product__td}>
                <span className={styles.quantity}>{product.total}</span>
                </td>
                <td className={styles.product__td}>
                <span className={styles.total}>${total}</span>
                </td>
                
            </tr>
                 
                 ))
                }
            
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