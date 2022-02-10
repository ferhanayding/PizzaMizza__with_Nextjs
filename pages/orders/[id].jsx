import Image from "next/image"
import styles from "../../styles/Order.module.css"

const Order = () => {
  const status= 1;
  const statusClass=(index)=>{
    if(index - status <1) return styles.done;
    if(index - status ===1) return styles.inProgress;
    if(index - status >1) return styles.undone;
  }
  return (
    <div className={styles.container} >
            <div className={styles.left}>
              <div className={styles.left__wrapper}>
                <table className={styles.table}>
                  <tr className={styles.table__tr__titles}>
                    <th className={styles.left__tr_title} >Order Id</th>
                    <th className={styles.left__tr_title} >Customer</th>
                    <th className={styles.left__tr_title} >Adress</th>
                    <th className={styles.left__tr_title} >Total</th>
                  </tr>
                  <tr className={styles.customer__tr} >
                    <td className={styles.customer__td} >123124314113</td>
                    <td className={styles.customer__td} >Arda Aydın</td>
                    <td className={styles.customer__td} >Trabzon Arkasokaklar cad.</td>
                    <td className={styles.customer__td} >$55.55</td>
                  </tr>
                </table>
                <div className={styles.orders__status_container} >
                  <div className={statusClass(0)}>
                    <Image src="/image/paid.png" width="30" height="30" alt="" objectFit="contain" />
                    <span>Payment</span>
                    <div className={styles.checkedIcon}>
                      <Image className={styles.chekedIcon} src={"/image/checked.png"} width="20" height={"20"} />
                    </div>
                  </div>
                  <div className={statusClass(1)}>
                    <Image src="/image/bake.png" width="30" height="30" alt="" objectFit="contain" />
                    <span>Preparing</span>
                    <div className={styles.checkedIcon}>
                      <Image className={styles.checkedIcon} src={"/image/checked.png"} width="20" height={"20"} />
                    </div>
                  </div>
                  <div className={statusClass(2)}>
                    <Image src="/image/bike.png" width="30" height={"30"} alt="" objectFit="contain" />
                    <span>On the Way</span>
                    <div className={styles.checkedIcon}>
                      <Image className={styles.checkedIcon} src={"/image/checked.png"} width="20" height={"20"} />
                    </div>
                  </div>
                  <div className={statusClass(3)}>
                    <Image src="/image/delivered.png" width="30" height={"30"} alt="" objectFit="contain" />
                    <span>Delivered</span>
                    <div className={styles.checkedIcon}>
                      <Image className={styles.checkedIcon} src={"/image/checked.png"} width="20" height={"20"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.right}>
            <div className={styles.right__wrapper}>
               <h1 className={styles.cart__title}>CART TOTAL</h1>
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
                <button>Paid</button>
                    </div>
            
                
           </div>
            </div>
    </div>
  )
}

export default Order