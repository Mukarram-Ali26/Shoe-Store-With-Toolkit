import React from 'react';

import Shoe from './../Shoe.json';
import { useParams } from 'react-router-dom';
import './../App.css';
import Button from '@material-ui/core/Button';
import { add } from "../features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

function ProductItem() {
    const { id } = useParams();
    const shoe = Shoe[id];
    const dispatch = useDispatch(useSelector)

    if (!shoe)
        return <h2>Product Not Found</h2>


    return (
        <div >
            <h1>Welcome to ProductItem</h1>

            <div >
                <h4>{shoe.name}</h4>
                <h4>Price: ${shoe.price}</h4>
                <img src={shoe.img} height={300} alt="shoe" />
            </div>
            <Button onClick={() => dispatch(add(shoe))} color="primary">ADD TO CART</Button>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                 ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                 reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                   mollit anim id est laborum.</p>
        </div>
    );
}

export default ProductItem;
