import React from 'react';
import classes from './ProductPreview.module.css';

const ProductPreview = (props) =>{
    return(
        <div className={classes.ProductPreview}>
            <img src='https://imgur.com/iOeUBV7.png' alt='Product Preview'/>
            
            {/* <div className={classes.TimeData}>
            <p>{`${currentHour}:${currentMinute}`}</p>
            </div> */}

            <div className={classes.HeartData}>
            <i class="fa-solid fa-heart-pulse"></i>
            <p>78</p>
            </div>
        </div>


    );
}
export default ProductPreview;