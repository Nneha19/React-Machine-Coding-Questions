import { useState, useEffect } from "react";
import './style.css'

export default function InfiniteScroll() {
  const [Loading, setLoading] = useState(true);
  const [count, setcount] = useState(0);
  const [products, setproducts] = useState([]);

  const handleScroll=()=>{
    const endofPaage=window.innerHeight+window.pageYOffset>=document.body.offsetHeight;
    if(endofPaage){
      setcount(count + 1)
    }
  }

  window.addEventListener('scroll',handleScroll);

  async function FetchProducts() {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/?limit=${20}&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setproducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
    
      }
      console.log("API Response:", result);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    FetchProducts();
  }, [count]);

  if (Loading) {
    <div>Loading Data...</div>;
  }

  return (
    <div>
      {products && products.length
        ? products.map((items) => (
          <div className="product">
                <img src={items.thumbnail} alt={items.title}/>
            <p>{items.title}</p>
           </div> 
        ))
        : null}
      
    </div>
  );
}
