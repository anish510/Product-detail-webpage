import { useState } from 'react'
import reactLogo from './assets/react.svg'
import classes from'./App.module.css'
import ProductData from './components/Product'
import ProductPreview from './components/Productreview';


function App() {

  const currentHour = new Date().getHours() >9 ? new Date().getHours() : '0' + new Date().getHours();
  const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes;

  
  
  

  return (
    <div className='App '>
      <header className='App-Header'>
        <nav className={classes.Topbar}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNTcRa2JlXkTzlOqO9TKFaSkB3GvX79jNm9u5pBd99&s' alt='amazon logo'/>
        </nav>
      </header>

      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <ProductPreview />
        </div>

        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{ProductData.title} </h1>
          <p className = {classes.ProductDescription}>{ProductData.description}</p><br/>
          <h3 className={classes.SectionHeading}>Select Color</h3>
          <div className={classes.ProductImageContainer}>
            <img className={classes.ProductImage} src = 'https://imgur.com/PTgQlim.png' alt='Red Colored Watch'/>
            <img className={classes.ProductImage} src = 'https://imgur.com/Mplj1YR.png' alt='Blue Colored Watch'/>
            <img className={classes.ProductImage} src = 'https://imgur.com/xSIK4M8.png' alt='Purple Colored Watch'/> 
            <img className={[classes.ProductImage , classes.SelectedProductImage].join(' ')} src = 'https://imgur.com/iOeUBV7.png' alt='Black Colored Watch'/> 
          </div>
          <br/>

          <h3 className={classes.SectionHeading}>Features</h3>
          <div>
            <button className={[classes.FeatureItem, classes.SelectedFeatureItem].join(' ')}>Time</button>
            <button className={classes.FeatureItem}>Heart Rate</button>

          </div>

          <button className={classes.PrimaryButton}>Buy Now</button>
        </div>

      </div>
      
      
     
   </div>
  )
}

export default App
