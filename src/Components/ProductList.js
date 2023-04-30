import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product"

const Products = () =>
{
    const [products , setProducts] = useState([]);
    useEffect(() =>{
        axios.get("https://fakestoreapi.com/products").then((res) => {setProducts(res.data)});
    },[]);
    const list = products.map((item , index) => (<Product 
        key={index}
         title={item.title}
         price={item.price}
         img = {item.image}
         />))
         
    return (
        <div>

            <div style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
            }}>
                <h1>Products</h1>
                <h3 style={{
                    fontWeight:"normal"
                }}>Find great products in Webtoon</h3>
            </div>

            <div style={{
                width:"100%",
                display:"flex",
                justifyContent:"center",
                flexWrap:"wrap"
            }}>
            
            {list}
            </div>
        </div>
           
    )
}


export default Products;