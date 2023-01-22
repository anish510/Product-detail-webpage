import { useState } from 'react'
import reactLogo from './assets/react.svg'
import classes from'./App.module.css'
import ProductData from './components/Product'


function App() {
  
  

  return (
    <div className='App '>
      <header className='App-Header'>
        <nav className={classes.Topbar}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNTcRa2JlXkTzlOqO9TKFaSkB3GvX79jNm9u5pBd99&s' alt='amazon logo'/>
        </nav>
      </header>

      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <img src='https://imgur.com/iOeUBV7.png' alt='Product Preview'/>
        </div>
        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{ProductData.title} </h1>
          <p className = {classes.ProductDescription}>{ProductData.description}</p><br/>
          <h3>Select Color</h3>
          
        </div>

      </div>
      
      
     
   </div>
  )
}

export default App
