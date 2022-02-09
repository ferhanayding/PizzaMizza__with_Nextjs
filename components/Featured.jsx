import Image from 'next/image';
import React, { useState } from 'react';
import styles from "../styles/Featured.module.css"
const Featured = () => {
  const images = [
    "/image/featured.png",
    "/image/featured2.png",
    "/image/featured3.png",
  ];
  const [sliderState, setSliderState] = useState(0);
  const handleArrow = (direction) =>{
    if(direction === "l") setSliderState(sliderState=== 0 ? 2 : sliderState-1 )
    if(direction === "r") setSliderState(sliderState === 2 ? 0 : sliderState+1)
  }
   
    
  return( <div className={styles.container} >
<div className={styles.arrow__container} style={{ left: "1%" }} 
onClick={()=>handleArrow("l")} >
        <Image src="/image/arrowl.png"   alt="" layout="fill" objectFit="contain"/>
      </div>
      <div className={styles.wrapper} style={{transform:`translate(-${sliderState *100}vw)`}} >
        {
          images.map((image,i)=>(
            <div className={styles.img__container}  key={i}>
            <Image src={image}  layout="fill" objectFit='contain' alt="ol" />
            </div>
          ))
        }
      </div>
        <div className={styles.arrow__container} style={{right:"1%"}} 
        onClick={()=>handleArrow("r")}
        >
          <Image src={"/image/arrowr.png"} objectFit="contain" layout='fill'  />
        </div>
  </div>
  )
};

export default Featured
