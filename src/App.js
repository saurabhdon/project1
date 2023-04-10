
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
//import Contact from './pages/contact';
import Productoverview from './component/productoverview';
import Cart from './pages/cart';
import Navigation from './component/navigation';
import Footer from './component/footer';
import {CartContex} from './CartContext'

function App() {

  return (
     <>
      <Router>
    <CartContex.Provider value={{nae:"dany",ban:"bhai"}}>  {/*wrap all component where cartcontext file data is needed and the value data is available in all wrapped components*/}
        <Navigation/>
        
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Productoverview/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer/>
    </CartContex.Provider>
      </Router>
      
     </>
  );
}

export default App;
