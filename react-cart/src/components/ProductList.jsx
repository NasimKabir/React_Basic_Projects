import React, { useEffect } from 'react'
import Product from './Product';
import { useDispatch } from "react-redux";
import { setProducts } from '../redux/actions/productsActions';
import axios from "axios";

const ProductList = () => {

  //  const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err: ", err);
            });
            console.log(response.data)
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    },[]);

    return (
        <div className="ui grid container">
            <Product />
        </div>
    );
}

export default ProductList
