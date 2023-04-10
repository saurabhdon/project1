 import { Link } from "react-router-dom";
const navigation = () => {
  const cartstyle=
  {
    background:'rgb(202,138,4)',
    display:'flex',
    borderRadius:'50px',
    padding:'4px 10px'
  }
  return (
    <>
    <nav className="container mx-auto flex justify-between p-5">
        <div className="logo flex"><img src="images/pizza.png" alt="LOGOO" style={{height:70}}/><i><b>Pizza</b></i>bite</div>
        {/*menu */}
        <div className="menu w-1/3 ">
            <ul className="menulist flex justify-evenly">
             <li><Link to='/'>HOME</Link></li>
             <li><Link to='/about'>ABOUT</Link></li>
             <li><Link to='/contact'>CONTACT</Link></li>
             <li>
              <Link to='/cart' style={cartstyle}>
              <span className="item pr-2 font-bold text-white">10</span>
              <img src="images/cart.png " alt="cart" className="cart_image h-8"></img>
              </Link>
             </li>
            </ul>

        </div>
    </nav>
      
    </>
  )
}

export default navigation
