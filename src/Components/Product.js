import React from 'react';
import './../App.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectCount,
} from '../features/counter/counterSlice';



function Product() {
  const shoes = useSelector(selectCount);

  return (
    <div >
      <h1>Welcome to Product</h1>
      <div className="productc">
        {Object.keys(shoes.value).map(keyName => {
          const shoe = shoes.value[keyName];
          return (
            <Link key={keyName} to={`/Product/${keyName}`}>
              <h4>{shoe.name}</h4>
              <h4>Price : ${shoe.price}</h4>
              
              <span>Click on me for details</span>
              <br />
              <img src={shoe.img} height={150} alt="shoe" />
            </Link>
          )
        })}
      </div>
    </div>
  );
}

export default Product;
