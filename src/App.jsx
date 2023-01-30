import classes from'./App.module.css'
import ProductPreview from './components/ProductPreview/Productreview';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Topbar from './components/TopBar/Topbar';
import React,{Component} from 'react';
import ProductData from './components/ProductDetails/Product';


class App extends Component {
  state = {
    productData : ProductData,
    currentPreviewImage : 'https://imgur.com/iOeUBV7.png',
    showHeartBeatSection: true, 
  }
  render(){
    return (
      <div className='App '>
        <header className='App-Header'>
          <Topbar/>
        </header>
  
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage = {this.state.currentPreviewImage} showHeartBeatSection = {this.state.showHeartBeatSection}/>
          </div>
  
          <div className={classes.ProductData}>
          <ProductDetails data = {this.state.productData}/>
          </div>
  
          
        </div>
        
        
       
     </div>
    )
  }

  
}

export default App
