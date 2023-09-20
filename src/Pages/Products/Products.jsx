import { useLoaderData } from "react-router-dom";

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
        <div>
            

        </div>
    );
};

export default Products;