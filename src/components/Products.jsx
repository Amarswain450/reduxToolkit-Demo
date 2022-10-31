import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
//import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

const Products = () => {
    const dispatch = useDispatch();

    const {data: products, status} = useSelector((state) => state.products);

    // const [products, setProducts] = useState([]);

    useEffect(() => {
        // const fetchProducts = async () => {
        //     try {
        //         const { data } = await axios.get(`https://fakestoreapi.com/products`);
        //         //console.log(data);
        //         setProducts(data)
        //     } catch (err) {
        //         console.log(err);
        //     }
        // }
        // fetchProducts();
        // dispatch(fetchProducts());
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product))
    }

    if(status === STATUSES.LOADING){
        return <h2>Loading....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }

    return (
        <>
            <div className="productsWrapper">
                {products.map((product) => (
                    <div className="card" key={product.id}>
                        <img src={product.image} alt="" />
                        <h4>{product.title}</h4>
                        <h5>{product.price}</h5>
                        <button onClick={() => handleAdd(product)} className="btn">
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products