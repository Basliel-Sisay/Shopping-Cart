import { useState, useEffect } from "react"
function Shop(){
    const [products, setProducts]= useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        async function loadingProducts(){
            try{
                const availableProducts = await product()
                if(!availableProducts){
                    throw new Error("Failed to fetch the products");
                }
                setProducts(availableProducts)
            }
            catch(err){
                console.log(err);
                setError("Failed to fetch the products");
            }
            finally{
                setLoading(false);
            }
        }
        loadingProducts();
    }, [])
    if(loading){
        return <div className="loading">Loading ...</div>
    }
    if(error){
        return <div className="errorMessage">{error}</div>
    }
    return (
        <div>
             {products.map(product =>(
        <div key={product.id} className="productCard">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product, 1)}>Add to Cart</button>
        </div>
      ))}
        </div>
    )
}
export default Shop