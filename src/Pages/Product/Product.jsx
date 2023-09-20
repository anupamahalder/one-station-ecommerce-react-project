import { useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../Products/ProductCard";
import { useParams } from "react-router-dom";

const Product = () => {
    // Way-1 
    // const product = useLoaderData();
    // console.log(product);

    // Way-2
    const dataId = useParams()
    // console.log(dataId);
    const [product, setProduct] = useState({})
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${dataId.id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[dataId.id])

    
    return (
        <div className="h-screen flex justify-center items-center">
            <ProductCard key={product.id} product={product}></ProductCard>        
        </div>
    );
};

export default Product;