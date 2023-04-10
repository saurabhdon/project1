 import Product from './productss';
 //import {Link} from 'react-router-dom';
 
const home = () => {
  
  return (
    <>
      <div className="main_container">

        <div className="front_veiw flex justify-around">
          <div className="quate py-28">
          <span><i>Are you HUNGRY !</i></span><br/>
          <span className="word text-6xl font-black">Don't  Wait </span><br/>
          <button className="ordernow bg-yellow-500 hover:bg-yellow-600 rounded-full px-6 py-2 text-white font-bold">Order Now </button>
          </div>
          <img src="images/pizza_logg.png" alt="pizza list" className="main_pizza h-96"></img>
        </div>

        <div className="middle_veiw ">
            <Product/>
        </div>

        <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8" />

  
      </div>
    </>
  )
}

export default home
