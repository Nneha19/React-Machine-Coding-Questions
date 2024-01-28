import { useEffect, useState } from "react"
import './style.css'


export default function LoadData(){

    const [loading,setloading]=useState(true);
    const [products,setproducts] = useState([]);
    const [count,setCount]= useState(0);


async function fetchProducts(){
    try{
        const response= await fetch(`https://dummyjson.com/products/?limit=${20}&skip=${count===0?0:count*20}`)
        const result = await response.json();

        if(result && result.products && result.products.length){
            setproducts((prevData)=>[...prevData,...result.products])
            setloading(false);
            console.log(result)

        }
    }
    catch(error){
        console.log(error)
        setloading(false);
    }
}

useEffect(()=>{
    fetchProducts()
},[count]);

if(loading){
    return <div>Loading Data!</div>
}

return <div className="loadmore-main-container">
    <div className="product-container">
        {
            products&& products.length?
            products.map((items)=>(
                <div className="product" key={items.id}>
                <img src={items.thumbnail} alt={items.title}/>
                <p>{items.title}</p>
                </div>
            )):null
        }
        <div className="button-container">
            <button style={{backgroundColor:'gray'}} onClick={()=>setCount(count+1)}>
                Load More Products
            </button>
        </div>
    </div>
    </div>
}