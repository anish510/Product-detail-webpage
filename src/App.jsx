import classes from'./App.module.css'
import ProductPreview from './components/ProductPreview/Productreview';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Topbar from './components/TopBar/Topbar';
import React,{Component} from 'react';
import ProductData from './components/ProductDetails/Product';


class App extends Component {
  state = {
    productData : ProductData,
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0, 
  }

  onColorOptionClick = (pos) =>{
    this.setState({currentPreviewImagePos: pos});

  }

  onFeatureItemClick = (pos) =>{
    
    this.setState({currentSelectedFeature: pos})
    
  }
  render(){
    return (
      <div className='App '>
        <header className='App-Header'>
          <Topbar/>
        </header>
  
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage = {this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} 
            currentSelectedFeature = {this.state.currentSelectedFeature}/>
          </div>
  
          <div className={classes.ProductData}>
          <ProductDetails data = {this.state.productData} 
          onColorOptionClick = {this.onColorOptionClick} 
          currentPreviewImagePos = {this.state.currentPreviewImagePos} 
          onFeatureItemClick = {this.onFeatureItemClick} 
          currentSelectedFeature = {this.state.currentSelectedFeature}/>
          </div>
  
          
        </div>
        
        
       
     </div>
    )
  }

  
}

export default App
