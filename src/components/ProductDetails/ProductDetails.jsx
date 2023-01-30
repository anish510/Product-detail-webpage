import React from 'react';
import classes from './Productdata.module.css'



const ProductDetails = (props) => {
  const colorOptions = props.data.colorOptions.map((items,pos) =>{
    const classArr = [classes.ProductImage]
    if(pos === 0){
      classArr.push(classes.SelectedProductImage);
    }
    return(
      <img key = {pos}  className={classArr.join(' ')} src = {items.imageUrl} alt={items.styleName}/> 
    );
  })


  const featureList = props.data.featureList.map((items,pos) => {
    const classArr = [classes.FeatureItem];
    if (pos === 0){
      classArr.push(classes.SelectedFeatureItem);
    }

    return(
    <button key = {pos} className={classArr.join(' ')}>{items}</button>
    )


  })
  
  return (
    <div className={classes.ProductData}>
          <h2 className={classes.ProductTitle}>{props.data.title}</h2>
          <p className = {classes.ProductDescription}>{props.data.description}</p><br/>
          <h3 className={classes.SectionHeading}>Select Color</h3>
          <div className={classes.ProductImageContainer}>
            {colorOptions}
          </div>
          <br/>

          <h3 className={classes.SectionHeading}>Features</h3>
          <div>
            {featureList}

          </div>

          <button className={classes.PrimaryButton}>Buy Now</button>
        </div>

  )
}

export default ProductDetails;