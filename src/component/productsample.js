 
const productsample = (props) => {        // props is object which is pass by productss.js containing fetch data
//const productsample={props};//extracting the data from props object
//console.log(props);


  return (
    <div className="">
            <img src={props.item.image} alt="margarita pizza" className="ml-8"/>
            <div className="text-center">
            <h2>{props.item.name}</h2>
            <span className="bg-gray-400 rounded-full px-center text-sm px-4 py-1 ">{props.item.size}</span>
            </div>
            <div className="flex justify-between p-5">
                <span  className="ml-6">${props.item.price}</span>
                <button className="rounded-full px-4 py-2 font-bold bg-yellow-500 hover:bg-yellow-600 mr-4">Add</button>
            </div>
    </div>
  )
}

export default productsample
