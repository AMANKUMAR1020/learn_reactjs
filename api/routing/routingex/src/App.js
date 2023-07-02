//import logo from './logo.svg';
//import {BrowserRouter as Router} from 'react-router-dom';
import React,{useState} from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import Buy from './Buy'

function App() {
  const [cartItem,setCartItem] = useState([])

  const addInCart = item =>{
    console.log('app.js is pass here');
  const isAlreadyAdded = cartItem.findIndex(function(array){
    return array.id === item.id
  })
  if(isAlreadyAdded !== -1){
    toast("Already added in cart",{
      type:'error'
    })
  }else{
      setCartItem([...cartItem,item])
    }
  }

  const buyNow = ()=>{
    setCartItem([])
    toast("Purchase Done",{
      type:'success'
    })
  }

  const removeItem = item =>{
    setCartItem(cartItem.filter(
      singleItem=>singleItem.id!== item.id))
  }
  return (
    <div className="App">
      <Buy addInCart={addInCart}/>
      {/* console.log('app.js is end here'); */}
    </div>
  );

  
}

export default App;
