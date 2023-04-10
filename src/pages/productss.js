import Productsample from "../component/productsample";
import { useState, useEffect, useContext } from 'react';
import {CartContex} from '../CartContext';  //use to available cartcontext data in this file


const Product = () => {

  const {ban} = useContext(CartContex);   //extract the value pass from cartcontext value present in app.js file
  
  const [products,setProducts]= useState([]);

  useEffect(() => {        //if data change then action perform here in useeffect
  //action written here
  fetch('./data.json')
  .then(function(response){
    return response.json();
  })
  .then(function (products){

    setProducts(products);

//console.log(products);
  });
    }, []);                                       //[data], []if data is empty then it run action one time

//fetch() 

   
  return (
    <div className="container pb-10 pt-6">
      <h1 className="text-center font-bold"><u>Product list {ban}</u></h1>
      <div className="wrapper grid grid-cols-4 gap-x-12 gap-y-12" >
        
      {
        products.map(i => <Productsample key={i._id} item={i}/>)
      }
         
      </div>
    </div>
  )
}

export default Product
