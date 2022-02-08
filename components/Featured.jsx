import Image from 'next/image';
import React from 'react';
import styles from ".././styles/Featured.module.css"
const Featured = () => {
    const images = [
        "/img/featured.png",
        "/img/featured2.png",
        "/img/featured3.png",
      ];
    
  return( <div className={styles.container} >
<div className={styles.left__arrow_container} >
    <Image src="/image/arrowl.png" alt="" layout="fill" objectFit='contain'  />
  </div>

  </div>
  )
};

export default Featured
