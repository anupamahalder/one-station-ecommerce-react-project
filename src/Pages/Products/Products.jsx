import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
    // useLoaderData is a hook of custom react router dom 
    const {products} = useLoaderData()
    console.log(products)
    //destructure our products object


    /**
     * //Previous way to fetch data
        const [products, setProducts] = useState([])
        useEffect(()=>{
            fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
        },[])
     */
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 px-3 bg-slate-200">
            {/* Loop through the products  */}
            {products?.map(product => <ProductCard key={product.id} product={product}></ProductCard>)}

        </div>
    );
};

export default Products;